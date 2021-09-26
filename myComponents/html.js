export const html = `
<div id="container">
  <div id="showControlsDiv">
    Show control panel <input type="checkbox" id="controlsCheckbox" name="controlsCheckbox"
    checked> <br>
  </div>

  <div id="controlPanel">
    <div id="panelTitle">Control panel</div>

    <div class="param">
    Choose a text color: <input type="color" id="textColorSelect"></div>
    
    <div class="param">
    <label>Choose a logo animation:
      <select id="logoAnimationChoice" name="logoAnimationChoice">
        <option value="none">none</option>
        <option value="wobble-ver-left">wobble-ver-left</option>
        <option value="heartbeat">heartbeat</option>
        <option value="jello-horizontal">jello-horizontal</option>
        <option value="flip-horizontal-bottom">flip-horizontal-bottom</option>
        <option value="rotate-diagonal-1">rotate-diagonal</option>
        <option value="rotate-center">rotate-center</option>
        <option value="roll-in-left">roll-in-left</option>
      </select>
    </label></div>

    <div class="param">
    <label>Choose a text animation:
      <select id="textAnimationChoice" name="textAnimationChoice">
        <option value="tracking-in-contract-bck">tracking-in-contract-bck</option>
        <option value="focus-in-expand">focus-in-expand</option>
        <option value="text-pop-up-tr">text-pop-up-tr</option>
      </select>
    </label></div>

    <div class="param">
    <label>Type a text content:
      <input type="text" id="textContent">
    </label></div>

    <div class="param">
    <label>Define the text alignment (horizontal):
      <select id="justifyContentChoice" name="justifyContentChoice">    
        <option value="flex-start">left</option>
        <option value="center">center</option>
        <option value="flex-end">right</option>
      </select>
    </label></div>

    <div class="param">
    <label>Define the text alignment (vertical):
      <select id="alignItemsChoice" name="alignItemsChoice">
        <option value="flex-start">up</option>
        <option value="center">center</option>
        <option value="flex-end">bottom</option>
      </select>
    </label></div>

    <div class="param">
    <label>Choose a font family:
      <select id="fontFamilyChoice" name="fontFamilyChoice">
        <option value="Arial, sans-serif">Arial, sans-serif</option>
        <option value="Trebuchet MS, sans-serif">Trebuchet MS, sans-serif</option>
        <option value="Verdana, sans-serif">Verdana, sans-serif</option>
        <option value="Tahoma, sans-serif">Tahoma, sans-serif</option>
        <option value="Andale Mono, monospace">Andale Mono, monospace</option>
        <option value="Courier, monospace">Courier, monospace</option>
        <option value="Brush Script MT, cursive">Brush Script MT, cursive</option>
        <option value="Florence, cursive">Florence, cursive</option>
        <option value="Impact, fantasy">Impact, fantasy</option>
      </select>
    </label></div>

    <div class="param">
    <label>Choose a text size:
      <input type="range" min="20" max="100" value="50" class="slider" id="textSizeRange">
    </label></div>

    <div class="param">
    <label>Choose a border style:
      <select id="borderStyleChoice" name="borderStyleChoice">
        <option value="none">none</option>
        <option value="hidden">hidden</option>
        <option value="dotted">dotted</option>
        <option value="dashed">dashed</option>
        <option value="solid">solid</option>
        <option value="double">double</option>
        <option value="groove">groove</option>
        <option value="ridge">ridge</option>
        <option value="inset">inset</option>
        <option value="outset">outset</option>
      </select>
    </label></div>

    <div class="param">
    <label>Choose a border width:
      <input type="range" min="0" max="30" value="0" class="slider" id="borderWidthRange">
    </label><br> </div>

    <div class="param">
    Choose a border color: <input type="color" id="borderColorSelect"><br>
    </div>

    <div class="param">
    <label>Choose a background:
      <select id="bgChoice" name="bgChoice">
        <option value="none">none</option>
        <option value="flammes">flammes</option>
        <option value="stade">stade</option>
        <option value="plage">plage</option>
      </select>
    </label></div>

    <div class="param">
    Or import (from /images): <input type="file" accept=".jpg" id="selectImageFile"></div>

    <div class="param">
    <label>Define a background opacity:
      <input type="range" min="0" max="1" value="0.8" step="0.01" class="slider" id="bgOpacity">
    </label></div>

    <div class="param">
    <label>Choose a logo width:
      <input type="range" min="20" max="500" value="50" class="slider" id="logoWidth">
    </label></div>

    <div class="param">
    <label>Choose a logo height:
      <input type="range" min="20" max="500" value="50" class="slider" id="logoHeight">
    </label></div>

    <div class="param">
    <label>Choose a logo border radius:
      <input type="range" min="0" max="100" value="50" class="slider" id="logoBorderRadius">
    </label></div>
    
  </div>

  <div id="logo"></div>
</div>

`;