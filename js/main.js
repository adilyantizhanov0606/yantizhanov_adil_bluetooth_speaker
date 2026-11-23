(() => {

  //variables
   const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");

    canvas.width = 1280;
    canvas.height = 720;

    const frameCount = 443 ; 
    const images = [];


    const buds = {
        frame: 0
    };

    for(let i = 0; i < frameCount; i++) {
        const img = new Image();
        //images/explode_dynamicNumber.webp
        img.src = `images/render_2_${(i + 1).toString().padStart(4, '0')}.png`;
        images.push(img);
    };

      gsap.to(buds, {
          frame: 421,
          ease: "none",
          snap: "frame",
          scrollTrigger: {
              trigger: ".exploded-view",
              pin: "#explode-view",
              start: "center center",
              end: "+=3000",
              scrub: 1,
          },
          onUpdate: render
      });



  const hotspots = document.querySelectorAll(".Hotspot");
  const infoBoxes = [
    {
      title: 'Speaker Drivers',
      text: 'Delivers clear and balanced sound for an enjoyable listening experience.',
      image: 'images/equalizer.svg'
    },
    {
      title: 'Connection button',
      text: 'Press to activate Bluetooth pairing mode and connect your device wirelessly.',
      image: 'images/bluetooth.svg'
    },
    {
      title: 'Equalizer',
      text: 'Adjusts audio frequencies to customize the sound and enhance your listening experience.',
      image: 'images/speaker-high.svg'
    },
    {
      title: 'Turn on/off button',
      text: 'Press to turn the speaker on or off.',
      image: 'images/power.svg'
    },
  ]

  //functions

   images[0].addEventListener("load", render);

    function render() {
        context.clearRect(0,0, canvas.width, canvas.height);
        //console.log(buds.frame);
        //console.log(images[buds.frame]);
        context.drawImage(images[buds.frame], 0, 0);
    }

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

