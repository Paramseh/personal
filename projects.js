const allProjects = [
  {
    id: 'vmouse',
    title: 'Vision Mouse',
    coverDescription: 'A desktop app that lets you use your camera as a real-time mouse.',
    thumb: 'images/eyemouse/VisionMouseTest.gif',
    tags: ['2022', 'TensorFlow', 'CV', 'Python'],
    content: `<div>
                <br/>
                <img src="/images/eyemouse/VisionMouseTest.gif" width="400px">
                <br/>
                I built a simple Convolutional Neural Network (CNN) that uses MediaPipe for real-time eye tracking. The CNN 
                was trained to recognize eye position and match it to the screen location, along with gestures like wink and 
                blink, which are then translated into mouse inputs to left click and right click. This system allows for 
                hands-free computer interaction, offering an innovative solution for accessibility and convenience. 
                <br/>
                <br/>
                At first, it was developed to be used with emacs, as moving your hands to the mouse was inconvient. <br/>
                <a href="/images/eyemouse/EyeMouseTerminal.gif"><img src="/images/eyemouse/EyeMouseTerminal.gif" width="400px"></a><br/>
                But I found it could be used for daily surfing as well. <br/>
                <a href="/images/eyemouse/EyeMouseChrom.gif"><img src="/images/eyemouse/EyeMouseChrom.gif" width="400px"></a><br/> 
              </div>`,
  },
  {
    id: 'holoblast',
    title: 'Holoblast',
    coverDescription: 'Multiplayer XR shooter game built for IOS and Oculus Quest 2. Presented at CMU Game Creation Society.',
    thumb: 'images/holoblast/HoloBlast.gif',
    tags: ['2022', 'Unity', 'AR Kit/AR Core', 'XR'],
    content: `<div>#2022<br/>
                <img src="/images/holoblast/HolBlast.gif" width="400px">
                <br/>
                I led a team at CMU's Game Creation Society to develop HoloBlast, an XR multiplayer shooter game. In this game, 
                up to five players join a lobby and engage in laser tag-style shooting. Custom skins can be chosen for armor and 
                guns. Shooting is triggered by finger gestures, recognized by a Python ML model. We used Unity ARKit to map 3D 
                Blender armor onto opponents and detect bullet hits, and Unity Photon for multiplayer functionality.
                <br/>
                <br/>
                Another in game clip, we have a map and multiplayer features. <br/>
                <a href="/images/holoblast/HoloBlast2.gif"><img src="/images/holoblast/HoloBlast2.gif" width="400px"></a><br/>
                <a href="https://youtu.be/wo33J5amnwg?si=H7atumJUDmt9N33k&t=1408">GCS Pitch Video</a><br/>
                <a href="https://github.com/paramseh/holoblast">Github</a><br/>
              </div>`,
  },
  {
    id: 'ufcreconstruction',
    title: 'UFC 3D Reconstruction & Odds Model',
    coverDescription: 'A deep neural network model that watches UFC fight, does 3D Reconstruction and by categorizing movements, makes live predictions for round winners.',
    thumb: 'images/ufc/ufc.gif',
    tags: ['2021', 'CV', 'Python'],
    content: `
          <img src="/images/ufc/ufc.gif" width="400px">
            <br/>
            This project reconstructs UFC fights in real time, using 3D reconstruction to track and recognize the number of
            punches and kicks that land. It analyzes 54 features, including records, experience, height, and wingspan, using
            multimodal Bayesian inference. Throughout the fight, the model updates the odds based on recognized attacks, speed,
            and slowdown, achieving a 93% accuracy rate by the 5th round.
            <br/>
            <br/>
            We use 3 seperate models, open-pose, a baynes network and a RNN in different steps to process the data. <br/>
            <a href="/images/ufc/how.png"><img src="/images/ufc/how.png" width="800px"></a><br/>
            <a href="https://github.com/paramseh/ufcmodel">Github</a><br/>
        </div>
        `
  },
  // {
  //   id: 'live-pluribus',
  //   title: 'Live Pluribus',
  //   coverDescription: 'Live poker table hand and betting amount decoder that uses Pluribus poker bot to determine live optimal play.',    
  //   thumb: 'images/thumbnails/morphing-clay-cover.gif',
  //   tags: ['2021', 'CV', 'Python'],
  //   content: `
  //         <img src="/images/ante/antehome.png" width="400px"><br/>
  //         <br/>
  //         Developed and launched a successful mobile casino game called Ante on the App Store and Google Play Store, 
  //         featuring a variety of mini-gambling games such as Plinko, Mines, Crash, Roulette, Blackjack, 3 Card Poker, 
  //         and a custom game called Towers. Utilized Unity game engine and implemented various premade assets like PlayFab
  //         and CBS for backend services. Conducted A/B testing on developmental features to optimize user experience and
  //         engagement. Handled creative development aspects, including user interface design using Figma, artwork creation
  //         with art studios, and App Store Optimization (ASO) efforts to improve visibility and discoverability.
  //         <br/>
  //         <br/>
  //         <a href="https://antegames.com/">Official Site</a><br/>
  //         <a href="https://apps.apple.com/us/app/ante/id6476683259">App Store Link</a></br>
  //       </div>
  //     `,
  // },
  {
    id: 'xr-basketball',
    title: 'XR Basketball',
    coverDescription: 'XR Basketball hoop to practice shots with Google Cardboard and IOS devices.',
    thumb: 'images/basketball/outsidehome.jpeg',
    tags: ['2020', 'Unity', 'AR Kit/AR Core'],
    content: `
      <div>2020<br/>
        <br/>
        A Unity-based personal project built in high school, XR Basketball augments a holographic basketball that 
        follows your hand and goes into a real-life basket. This allows people to practice shooting with a real 
        hoop and an imaginary basketball, blending physical activity with augmented reality.
        <br/>
        <br/>
        Augmenting a basketball hoop anywhere with a phone. <br/>
        <a href="/images/basketball/outside.jpeg"><img src="/images/basketball/outside.jpeg" width="400px"></a><br/>
        Keeps track of points and works in VR spaces. <br/>
        <a href="/images/basketball/pool.jpeg"><img src="/images/basketball/pool.jpeg" width="400px"></a><br/>
        Lighting and dimensions, works very well. <br/>
        <a href="/images/basketball/park.jpeg"><img src="/images/basketball/park.jpeg" width="400px"></a><br/>
      </div>`,
  },
  {
    id: 'ante',
    title: 'Ante Casino',
    thumb: 'images/ante/antehomee.png',
    coverDescription: 'Mobile Casino App that allows players to play crash, plinko, roulette, blackjack and more!',
    tags: ['2020-2021', 'Unity'],
    content: `
        <img src="/images/ante/antehome.png" width="400px"><br/>
        <br/>
        Developed and launched a successful mobile casino game called Ante on the App Store and Google Play Store, 
        featuring a variety of mini-gambling games such as Plinko, Mines, Crash, Roulette, Blackjack, 3 Card Poker, 
        and a custom game called Towers. Utilized Unity game engine and implemented various premade assets like PlayFab
        and CBS for backend services. Conducted A/B testing on developmental features to optimize user experience and
        engagement. Handled creative development aspects, including user interface design using Figma, artwork creation
        with art studios, and App Store Optimization (ASO) efforts to improve visibility and discoverability.
        <br/>
        <br/>
        <a href="https://antegames.com/">Official Site</a><br/>
        <a href="https://apps.apple.com/us/app/ante/id6476683259">App Store Link</a></br>
      </div>
    `
  },
];
