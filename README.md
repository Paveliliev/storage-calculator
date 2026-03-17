# 📦 Warehouse Storage Zone Optimizer Pro
**Solving Spatial Inefficiency with Python-Driven Logic**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://paveliliev.github.io/storage-calculator/)

## 🎯 The Business Problem
In high-volume distribution centers, manual placement decisions often lead to "dead space" and safety risks. This tool was engineered to replace guesswork with data-driven accuracy, ensuring that every SKU is placed in the zone that maximizes volumetric density while respecting physical weight and safety constraints.

## 🚀 Key Features
* **Multi-Zone Analysis:** Instantly calculates "best fit" across Shelving (SH), Conveyors (OC), Carton Live (CL), and Pallet zones (UK4W/EURO).
* **Dynamic Buffer Logic:** Adjustable "Safety Buffers" (e.g., 80% for eaches) to account for finger-gap picking clearance and MHE maneuverability.
* **Volumetric Hierarchy:** Automatically detects if a carton's volume is mismatched with its unit dimensions (Ratio Alerts).
* **Operational Safety:** Enforces weight limits per zone (e.g., 50kg for Shelving, 1000kg for Pallets) to ensure structural integrity and ISO compliance.

## 🛠 Technical Stack
This project demonstrates a professional **Separation of Concerns** architecture:
* **Python (PyScript):** The core "Logic Engine" handling complex spatial math and array processing.
* **JavaScript:** Manages the UI state, theme persistence (Dark/White/Matrix mode), and Clipboard API integration.
* **HTML5/CSS3:** A responsive, mobile-first interface designed for use on warehouse floor tablets and handhelds.

## 📈 Impact & ROI
By automating the calculation of layers and footprints:
1.  **Reduced Error Rates:** Eliminates manual calculation errors that lead to overfilled locations.
2.  **Increased Density:** Maximizes vertical "air space" utilization by up to 15-20% through precise layer-stacking logic.
3.  **Efficiency:** Reduces the time spent on "Location Mapping" during New Product Introductions (NPI).

## 👤 Author
**Pavel Iliev** *Data Transformation Specialist | Stock Data Analyst* [LinkedIn](https://www.linkedin.com/in/pavel-iliev-610640155)

---
*Note: This application is a standalone demonstration of the automation logic I implement in ERP/WMS environments.*
