<h1>Warehouse Spatial Optimizer</h1>
<p><b>A Web-Based Tool for Packaging Dimension Analysis and Storage Strategy</b></p>

<div align="center">
  <a href="https://paveliliev.github.io/storage-calculator/"><strong>View Live App »</strong></a>
</div>

<h3>🚀 Overview</h3>
<p>This application was developed to solve the "Warehouse Tetris" problem. In high-volume logistics, manually determining the most efficient storage location for varying SKU dimensions often leads to wasted vertical space or inefficient picking paths. This tool automates those calculations to provide instant, optimized placement strategies.</p>

<h3>Key Business Value</h3>
<dl>
  <dt><b>Space Utilization</b></dt>
  <dd>Identifies underutilized vertical "air space" by calculating volume-to-bin ratios.</dd>
  
  <dt><b>Operational Speed</b></dt>
  <dd>Reduces the time taken by floor staff to decide on stock placement by providing instant, data-driven recommendations.</dd>
  
  <dt><b>Scalability</b></dt>
  <dd>Easily accessible on mobile devices for warehouse floor staff via GitHub Pages.</dd>
</dl>

<h3>🛠 Technical Stack</h3>
<dl>
  <dt><b>Languages</b></dt>
  <dd>HTML5, CSS3, and JavaScript (ES6+).</dd>
  
  <dt><b>Logic Engine</b></dt>
  <dd>Custom JavaScript algorithms designed to calculate spatial volume, factoring in safety buffers and packaging tolerances.</dd>
  
  <dt><b>Deployment</b></dt>
  <dd>Hosted via GitHub Pages for high availability and zero-latency performance.</dd>
</dl>

<h3>📂 Advanced Spatial Logic</h3>
<p>Unlike standard calculators, this engine is designed with real-world warehouse constraints in mind:</p>
<dl>
  <dt><b>Pallet & Rack Overhang Logic</b></dt>
  <dd>The algorithm calculates dimensions against standard UK/Euro pallet footprints, flagging potential overhang risks that could obstruct narrow aisles or violate safety protocols.</dd>
  
  <dt><b>Vertical Stacking Limits</b></dt>
  <dd>Includes variables for maximum stacking heights, ensuring suggested locations do not exceed sprinkler clearance or rack weight capacities.</dd>
  
  <dt><b>Tolerance & Safety Buffers</b></dt>
  <dd>Automatically applies a 5-10% "finger-gap" clearance buffer to calculations, ensuring that stock can be physically retrieved by operators or MHE (Material Handling Equipment) without damaging product.</dd>
</dl>

<h3>📂 Core Functionalities</h3>
<dl>
  <dt><b>Dimension Processing</b></dt>
  <dd>Users input SKU dimensions (Length, Width, Height) to receive an immediate volume footprint.</dd>
  
  <dt><b>Optimization Strategy</b></dt>
  <dd>The calculator compares SKU dimensions against standard warehouse bin/rack sizes to suggest the most space-efficient location type.</dd>
  
  <dt><b>Real-Time UI</b></dt>
  <dd>Dynamic feedback loop that updates calculations instantly as inputs change, designed for fast-paced warehouse environments.</dd>
</dl>

<h3>👤 Author</h3>
<p><b>Pavel Iliev</b><br>
Data Transformation Analyst | BI & Automation Specialist<br>
<a href="https://www.linkedin.com/in/pavel-iliev-610640155">LinkedIn Profile</a></p>

<p><i><b>Note:</b> This tool is a standalone implementation of the spatial optimization logic used in my larger data transformation projects at Exertis UK.</i></p>
