function slide() {
    let pos = 0; // Current slide position
  
    function play() {
      pos = (pos + 1) % 3; // Increment and wrap position
  
      const textContainer = $('.shorts .video$'); // Target the container element
      textContainer.animate({ // Animate the container
        marginTop: -800 * pos + 'px', // Adjust margin for vertical sliding
      }, 500); // Animation duration (500 milliseconds)
    }
  
    play(); // Start the animation
  }
  
  $(document).on('click', '.icon', slide); // Event listener for icon clicks
  