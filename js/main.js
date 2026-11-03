(() => {

  //variables
  const hotspots = document.querySelectorAll(".Hotspot");
  const infoBoxes = [
    {
      title: 'Speaker Drivers',
      text: 'Delivers clear and balanced sound for an enjoyable listening experience.',
      image: 'images/speaker.svg'
    },
    {
      title: 'Connection button',
      text: 'Press to activate Bluetooth pairing mode and connect your device wirelessly.',
      image: 'images/power-button.svg'
    },
    {
      title: 'Equalizer',
      text: 'Adjusts audio frequencies to customize the sound and enhance your listening experience.',
      image: 'images/usb-c-charging.svg'
    },
    {
      title: 'Turn on/off button',
      text: 'Press to turn the speaker on or off.',
      image: 'images/anti-slip-pads.svg'
    },
  ]

  //functions

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      //console.log(index);
      //console.log(index+1);
      let selected = document.querySelector(`#hotspot-${index+1}`);

      //need to create title
      const titleElement = document.createElement("h2");
      titleElement.textContent = infoBox.title;
      //need to create text
      const textElement = document.createElement("p");
      textElement.textContent = infoBox.text;
      //need to create image
      const imageElement = document.createElement('img');
      imageElement.src= infoBox.image;


      //apppend the title
      selected.appendChild(imageElement);
      selected.appendChild(titleElement);
      selected.appendChild(textElement);
      //append the image
    });
  }

  loadInfo();

})();

