import React from "react";

const ShapeMenu = ({ onShapeChange, onSpeedChange, onColorChange }) => {
    return (
      <div className="bg-white p-4 rounded shadow-lg mt-6">
        <h2 className="text-xl font-semibold mb-4">Customize Shapes</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Shape</label>
          <select
            className="w-full mt-1 p-2 border rounded"
            onChange={(e) => onShapeChange(e.target.value)}
          >
            <option value="cube">Cube</option>
            <option value="sphere">Sphere</option>
            <option value="cylinder">Cylinder</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Floating Speed</label>
          <input
            type="range"
            min="1"
            max="10"
            className="w-full"
            onChange={(e) => onSpeedChange(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Object Color</label>
          <input type="color" className="w-full" onChange={(e) => onColorChange(e.target.value)} />
        </div>
      </div>
    );
  };

  export default ShapeMenu;