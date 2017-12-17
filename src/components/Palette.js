import React from 'react';
import './Palette.css';

const Palette = ({colors, onColor}) => {
  let buttons = colors.map((color, i) => {
    let style = {
      backgroundColor: color
    };

    return <button
      type="button"
      key={i}
      style={style}
      onClick={(e) => {
        e.stopPropagation();
        onColor(color);
      }}
    />
  });

  return (
    <div id="palette-wrap">
      {buttons}
    </div>
  );
};

export default Palette;
