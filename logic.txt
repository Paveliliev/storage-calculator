from pyscript import document, window
import math

def get_f(id):
    val = document.querySelector(f"#{id}").value
    return float(val) if val else 0.0

def reset_inputs(event):
    for i in ["L", "W", "H", "Weight", "CL_c", "CW", "CH", "CWE", "CQ"]: 
        document.querySelector(f"#{i}").value = ""
    document.querySelector("#output-area").innerHTML = ""
    document.querySelector("#copy-btn").style.display = "none"

def calc_best_fit(l, w, h, weight, zone_key, z_dims, buffer_pct):
    z = z_dims[zone_key]
    weight_limits = {"SH": 50, "OC": 40, "CL": 80, "UK4W": 1000, "EURO": 1000}
    
    # Calculate physical max
    qty1 = (math.floor(z['l']/l) * math.floor(z['w']/w))
    qty2 = (math.floor(z['l']/w) * math.floor(z['w']/l))
    footprint = max(qty1, qty2)
    layers = math.floor(z['h']/h)
    physical_max = footprint * layers
    
    # Apply Buffer % (Rounded down)
    qty = math.floor(physical_max * (buffer_pct / 100))
    
    if zone_key == "OC": qty *= 2
    
    # Check Weight Constraints
    if weight > 0:
        mw = math.floor(weight_limits[zone_key] / weight)
        if mw < qty: qty = mw
    
    eff = (((l*w*h) * qty) / (z['l']*z['w']*z['h']*(2 if zone_key=="OC" else 1)) * 100) if qty > 0 else 0
    return max(0, qty), eff

def calc(event):
    out = document.querySelector("#output-area")
    z_keys = ["SH", "OC", "CL", "UK4W", "EURO"]
    z_dims = {zk: {"l": get_f(f"{zk}_L"), "w": get_f(f"{zk}_W"), "h": get_f(f"{zk}_H")} for zk in z_keys}
    
    buf_e, buf_c = get_f("BUF_E"), get_f("BUF_C")
    l, w, h, wt = get_f("L"), get_f("W"), get_f("H"), get_f("Weight")
    cl, cw, ch, cwt, cq = get_f("CL_c"), get_f("CW"), get_f("CH"), get_f("CWE"), get_f("CQ")
    if not (l and w and h): return

    html_content = ""
    copy_str = f"Storage Optimization Summary\nBuffers: Each {int(buf_e)}%, Carton {int(buf_c)}%\nEach Dims: {l}x{w}x{h} ({wt}kg)\n"
    
    if cl and cw and ch and cq:
        ratio = (((cl * cw * ch) / cq) / (l * w * h)) * 100 if (l*h) > 0 else 0
        if ratio < 70 or ratio > 130:
            html_content += f'<div class="alert-block">⚠️ <b>Volume Check:</b> Carton is {int(ratio)}% of unit volume.</div>'

    # Individual Items
    indiv_block = '<div class="res-block"><strong>📊 Individual Items:</strong>'
    for zk in z_keys:
        q, e = calc_best_fit(l, w, h, wt, zk, z_dims, buf_e)
        label = zk if zk not in ["UK4W", "EURO"] else f"Pallet ({zk})"
        indiv_block += f'<div class="bar-label"><span>{label} ({int(e)}% Density)</span><span>{int(q)} units</span></div><div class="bar-bg"><div class="bar-fill" style="width:{e}%; background:#007bff;"></div></div>'
        copy_str += f"{label}: {int(q)} units\n"
    indiv_block += '</div>'

    # Carton Storage
    cart_block = ""
    if cl and cw and ch and cq:
        cart_block = '<div class="res-block carton-res"><strong>📊 Carton Storage (Total Units):</strong>'
        copy_str += f"\nCarton Config: {cl}x{cw}x{ch} Qty:{cq}\n"
        for zk in z_keys:
            q_boxes, e = calc_best_fit(cl, cw, ch, cwt, zk, z_dims, buf_c)
            total_items = q_boxes * cq
            label = zk if zk not in ["UK4W", "EURO"] else f"Pallet ({zk})"
            cart_block += f'<div class="bar-label"><span>{label} ({int(e)}% Density)</span><span>{int(total_items)} items</span></div><div class="bar-bg"><div class="bar-fill" style="width:{e}%; background:#e67e22;"></div></div>'
            copy_str += f"Carton {label}: {int(total_items)} units\n"
        cart_block += '</div>'

    out.innerHTML = f'{html_content}<div class="res-container">{indiv_block}{cart_block}</div>'
    window.copyText = copy_str
    document.querySelector("#copy-btn").style.display = "block"
