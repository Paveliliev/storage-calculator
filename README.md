<h1>Warehouse Spatial Optimizer Pro</h1>
<p><b>A Modular Web Application for Advanced Storage Strategy and Packaging Dimension Analysis</b></p>

<div align="center">
  <a href="https://paveliliev.github.io/storage-calculator/"><strong>View Live App »</strong></a>
</div>

<h3>🚀 Overview</h3>
<p>This application was developed to solve the "Warehouse Tetris" problem. In high-volume logistics, manually determining the most efficient storage location for varying SKU dimensions often leads to wasted vertical space, inefficient picking paths, or overflowing locations. This tool automates those calculations to provide instant, optimized placement strategies while enforcing operational safety constraints.</p>

<h3>Key Business Value</h3>
<dl>
  <dt><b>Space Utilization</b></dt>
  <dd>Identifies underutilized vertical "air space" by calculating volumetric efficiency against standard warehouse infrastructure.</dd>
  
  <dt><b>Operational Speed</b></dt>
  <dd>Reduces the time taken by floor staff to decide on stock placement by providing instant, data-driven recommendations.</dd>
  
  <dt><b>Scalability</b></dt>
  <dd>Easily accessible on mobile devices for warehouse floor staff via GitHub Pages, with a clean separation of concerns for rapid future feature deployment.</dd>
</dl>

<h3>🛠 Technical Architecture</h3>
<p>This project demonstrates a modern approach to web application architecture, strictly separating logic, presentation, and data management:</p>
<dl>
  <dt><b>Logic Engine (Python/PyScript)</b></dt>
  <dd><code>logic.py</code> handles all spatial math, volumetric density calculations, and dimensional array processing.</dd>
  
  <dt><b>State Management (JavaScript)</b></dt>
  <dd><code>script.js</code> manages the clipboard API, dynamic theme switching, and local storage state persistence.</dd>
  
  <dt><b>Presentation (HTML5/CSS3)</b></dt>
  <dd>A responsive, CSS-grid-based UI designed specifically for high-contrast visibility on mobile warehouse devices.</dd>
</dl>

<h3>📂 Advanced Spatial Logic Engine</h3>
<p>Unlike standard calculators, this engine is designed with real-world logistics constraints in mind:</p>
<dl>
  <dt><b>Global Buffer Controls</b></dt>
  <dd>Users can adjust target "fill percentages" (e.g., 80% for individual eaches vs. 100% for cartons). This prevents overflowing bins and ensures stock can be safely picked by hand (finger-gap clearance) or by Material Handling Equipment (MHE).</dd>

  <dt><b>Pallet & Rack Overhang Logic</b></dt>
  <dd>The algorithm calculates dimensions against standard footprints (UK 4-Way and Euro Pallets), enforcing a 1.8m height restriction (including base height) to maintain sprinkler clearance and safety protocols.</dd>
  
  <dt><b>Weight Constraints</b></dt>
  <dd>A secondary validation layer ensures that volumetric capacity does not exceed the safe working load (SWL) limits of the specific zone (e.g., shelving vs. carton live racking).</dd>
</dl>

<h3>⚙️ Core Functionalities</h3>
<dl>
  <dt><b>Dimension Processing</b></dt>
  <dd>Inputs for individual SKU dimensions (Length, Width, Height, Weight) or Carton hierarchies yield an immediate volumetric footprint.</dd>
  
  <dt><b>Optimization Strategy</b></dt>
  <dd>The calculator instantly compares inputs against multiple standard warehouse bin/rack profiles simultaneously, visually outputting the most space-efficient location type.</dd>
</dl>

<h3>👤 Author</h3>
<p><b>Pavel Iliev</b><br>
Data Transformation Analyst | BI & Automation Specialist<br>
<a href="https://www.linkedin.com/in/pavel-iliev-610640155">LinkedIn Profile</a></p>

<p><i><b>Note:</b> This tool is a standalone implementation of the spatial optimization logic used in my larger data transformation projects.</i></p>
