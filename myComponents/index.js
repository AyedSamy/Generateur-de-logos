import { html } from "./html.js";
import { style } from "./style.js";

const getBaseURL = () => {
  return new URL('.', import.meta.url);
};

class MyLogo extends HTMLElement {
  
  constructor() {
    console.log("constructor");

    super();
    this.attachShadow({
      mode: "open"
    });
    this.showControls = this.getAttribute("showControls");
    this.fontFamily = this.getAttribute("fontFamily");
    this.text = this.getAttribute("text");
    this.textColor = this.getAttribute("textColor");
    this.horizontalAlignment = this.getAttribute("horizontalAlignment");
    this.verticalAlignment = this.getAttribute("verticalAlignment");
    this.textSize = this.getAttribute("textSize");
    this.logoWidth = this.getAttribute("logoWidth");
    this.logoHeight = this.getAttribute("logoHeight");
    this.borderRadius = this.getAttribute("borderRadius");
    this.borderStyle = this.getAttribute("borderStyle");
    this.borderWidth = this.getAttribute("borderWidth");
    this.borderColor = this.getAttribute("borderColor");
    this.logoAnimationClass = this.getAttribute("logoAnimation");
    this.textAnimationClass = this.getAttribute("textAnimation");
    this.bgImage = this.getAttribute("bgImage");
    this.bgOpacity = this.getAttribute("bgOpacity");
  }

  fixRelativeURLs() {
    let images = this.shadowRoot.querySelectorAll('img');
    images.forEach((e) => {
      console.log("dans le foreach");
      let imagePath = e.getAttribute('src');
      e.src = getBaseURL() + '/' + imagePath;
    });

  }

  connectedCallback() {
    console.log("connectedCallback");
    this.shadowRoot.innerHTML = `<style>${style}</style>` + html;

    this.myControlPanel = this.shadowRoot.querySelector("#controlPanel");
    if (this.showControls == "True")
      this.myControlPanel.style.display = "block";
    else
      this.myControlPanel.style.display = "none";

    this.myLogo = this.shadowRoot.querySelector("#logo");
    this.myLogo.innerHTML = "<div id='logoBg'></div><div id='logoText'>" + this.text + "</div>";
    this.myLogoText = this.shadowRoot.querySelector("#logoText");
    this.myLogoBg = this.shadowRoot.querySelector("#logoBg");
    this.fixRelativeURLs();

    this.myLogoText.style.justifyContent = this.horizontalAlignment;
    this.shadowRoot.querySelector("#justifyContentChoice").value = this.horizontalAlignment;
    this.myLogoText.style.alignItems = this.verticalAlignment;
    this.shadowRoot.querySelector("#alignItemsChoice").value = this.verticalAlignment;

    this.myLogo.style.width = this.logoWidth;
    this.myLogoText.style.width = this.logoWidth;
    this.shadowRoot.querySelector("#logoWidth").value = this.logoWidth;
    this.myLogo.style.height = this.logoHeight;
    this.myLogoText.style.height = this.logoHeight;  
    this.shadowRoot.querySelector("#logoHeight").value = this.logoHeight;
    this.myLogoText.style.fontSize = this.textSize;
    this.shadowRoot.querySelector("#textSizeRange").value = this.textSize;
    this.myLogo.style.color = this.textColor;
    this.shadowRoot.querySelector("#textColorSelect").value = this.textColor;
    this.myLogo.style.fontFamily = this.fontFamily;
    this.shadowRoot.querySelector("#fontFamilyChoice").value = this.fontFamily;
    this.myLogoBg.style.background = "url(" + getBaseURL() + `images/${this.bgImage}.jpg)`;
    this.shadowRoot.querySelector("#bgChoice").value = this.bgImage;
    this.myLogoBg.style.backgroundSize = "contain";
    this.shadowRoot.querySelector("#bgOpacity").value = this.bgOpacity;
    this.myLogo.style.border = `${this.borderWidth}px ${this.borderStyle} ${this.borderColor}`;
    this.shadowRoot.querySelector("#borderColorSelect").value = this.borderColor;
    this.shadowRoot.querySelector("#borderStyleChoice").value = this.borderStyle;
    this.myLogo.style.borderRadius = this.borderRadius;
    this.myLogoBg.style.borderRadius = this.borderRadius;
    this.shadowRoot.querySelector("#logoBorderRadius").value = this.borderRadius;

    if (this.logoAnimationClass){
      this.myLogo.classList.add(this.logoAnimationClass);
      this.shadowRoot.querySelector("#logoAnimationChoice").value = this.logoAnimationClass;
    }

    if (this.textAnimationClass){
      this.myLogoText.classList.add(this.textAnimationClass);
      this.shadowRoot.querySelector("#textAnimationChoice").value = this.textAnimationClass;
    }

    /* Event listeners */

    /* Hide or show control panel */
    this.shadowRoot
      .querySelector("#controlsCheckbox")
      .addEventListener("change", (event) => {
        let ele = this.shadowRoot.querySelector('#controlsCheckbox');
        if (ele.checked) {
          this.myControlPanel.style.display = "block";
        }
        else {
          this.myControlPanel.style.display = "none";
        }
    });
    
    /* Change text color */
    this.shadowRoot
      .querySelector("#textColorSelect")
      .addEventListener("input", (event) => {
        this.myLogo.style.color = event.target.value;
    });

    /* Change text alignment (horizontal) */
    this.shadowRoot
      .querySelector("#justifyContentChoice")
      .addEventListener("change", (event) => {
        console.log(event.target.value);
        this.myLogoText.style.justifyContent = event.target.value;
    });

    /* Change text alignment (vertical) */
    this.shadowRoot
      .querySelector("#alignItemsChoice")
      .addEventListener("change", (event) => {
        console.log(event.target.value);
        this.myLogoText.style.alignItems = event.target.value;
    });

    /* Change background image */
    this.shadowRoot
      .querySelector("#bgChoice")
      .addEventListener("change", (event) => {
        this.myLogoBg.style.background = "url(" + getBaseURL() + `images/${event.target.value}.jpg)`;
        this.myLogoBg.style.backgroundSize = "contain";
    });

    /* Change logo animation */
    this.shadowRoot
      .querySelector("#logoAnimationChoice")
      .addEventListener("change", (event) => {
        console.log(event.target.value);
        this.myLogo.className = event.target.value;
    });

    /* Change text animation */
    this.shadowRoot
      .querySelector("#textAnimationChoice")
      .addEventListener("change", (event) => {
        console.log(event.target.value);
        this.myLogoText.className = event.target.value;
    });

    /* Change background image with imported file */
    this.shadowRoot
      .querySelector("#selectImageFile")
      .addEventListener("change", (event) => {
        console.log(event.target.value);
        let file_array = event.target.value.split("\\");
        console.log(file_array);
        this.myLogoBg.style.background = "url(" + getBaseURL() + `images/${file_array[file_array.length - 1]})`;
        this.myLogoBg.style.backgroundSize = "contain";
    });

    /* Change background opacity */
    this.shadowRoot
      .querySelector("#bgOpacity")
      .addEventListener("input", (event) => {
        this.myLogoBg.style.opacity = event.target.value;
    });

    /* Change logo width */
    this.shadowRoot
      .querySelector("#logoWidth")
      .addEventListener("input", (event) => {
        this.myLogo.style.width = `${event.target.value + "px"}`;
        this.myLogoText.style.width = `${event.target.value + "px"}`;
    });

    /* Change logo height */
    this.shadowRoot
      .querySelector("#logoHeight")
      .addEventListener("input", (event) => {
        this.myLogo.style.height = `${event.target.value + "px"}`;
        this.myLogoText.style.height = `${event.target.value + "px"}`;
    });

    /* Change border radius */
    this.shadowRoot
      .querySelector("#logoBorderRadius")
      .addEventListener("input", (event) => {
        this.myLogo.style.borderRadius = `${event.target.value + "%"}`;
        this.myLogoBg.style.borderRadius = `${event.target.value + "%"}`;
    });

    /* Change text content */
    this.shadowRoot
      .querySelector("#textContent")
      .addEventListener("input", (event) => {
        this.myLogoText.innerHTML = "<div id='logoText'>" + event.target.value + "</div>";
    });

    /* Change font family */
    this.shadowRoot
      .querySelector("#fontFamilyChoice")
      .addEventListener("change", (event) => {
        this.myLogo.style.fontFamily = event.target.value;
    });

    /* Change text size */
    this.shadowRoot
      .querySelector("#textSizeRange")
      .addEventListener("input", (event) => {
        this.myLogoText.style.fontSize = event.target.value;
    });

    /* Change border style */
    this.shadowRoot
      .querySelector("#borderStyleChoice")
      .addEventListener("change", (event) => {
        this.myLogo.style.borderStyle = event.target.value;
    });

    /* Change border width */
    this.shadowRoot
      .querySelector("#borderWidthRange")
      .addEventListener("input", (event) => {
        this.myLogo.style.borderWidth = event.target.value + "px";
    });

    /* Change border color */
    this.shadowRoot
      .querySelector("#borderColorSelect")
      .addEventListener("input", (event) => {
        this.myLogo.style.borderColor = event.target.value;
    });


  }
}

customElements.define("my-logo", MyLogo);