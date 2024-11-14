document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".name-header h2");
    const audioSrc = "y2mate.com - Ariana DeBose Chris Pine  At All Costs From WishLyric Video.mp3";
    let currentAudio = null;
    let isPlaying = false;
    let currentLyricsIndex = 0;
    let currentImageIndex = 0;

    currentAudio = new Audio(audioSrc);
    textElement.classList.add("normal");

    const introMessage =  document.querySelector(".intro-message");
    const allSections = document.querySelectorAll('main section');

    const lyrics = [
        {text:"Ma Christine Cherishes this melody", start:0, end: 12},
        { text: "If happiness was a tangible thing, it would be you", start: 13, end:19 },
        { text: "If you'd told me the feeling you'd bring, I'd think it untrue", start: 20, end: 26 },
        { text: "And people search for a wonder like you all of their lives", start: 27, end: 32 },
        { text: "You still amaze me after all this time", start: 33, end: 39 },
        { text: "You pull me in like some kind of wind", start: 40, end: 44 },
        { text: "Mesmerized by the hold I'm in", start: 45, end: 47 },
        { text: "Leave you here, I don't wanna", start: 48, end: 51 },
        { text: "I wanna", start: 52, end: 53 },
        { text: "Promise, as one does", start: 54, end: 58 },
        { text: "I, I will protect you at all costs", start: 59, end: 65 },
        { text: "Keep you safe here in my arms", start: 66, end: 71 },
        { text: "I, I will protect you at all costs", start: 72, end: 79 },
        { text: "At all costs", start: 80, end: 83 },
        { text: "What's pain when I look at you", start: 84, end: 87 },
        { text: "No way I could explain you", start: 88, end: 90 },
        { text: "Even if I tried to", start: 91, end: 92 },
        { text: "I'll never dream like I used to do", start: 93, end: 97 },
        { text: "If someone tried to hurt you", start: 98, end: 99 },
        { text: "I don't see how that could happen", start: 100, end: 102 },
        { text: "I'd fight for you in ways you can't imagine", start: 103, end: 105 },
        { text: "Felt this? No, I haven't", start: 106, end: 107 },
        { text: "I hope it would be alright to", start: 108, end: 109 },
        { text: "Stay right here beside you", start: 110, end: 111 },
        { text: "And promise, as one does", start: 112, end: 116 },
        { text: "I, I will protect you at all costs", start: 117, end: 122 },
        { text: "Keep you safe here in my arms", start: 123, end: 129 },
        { text: "I, I will protect you at all costs", start: 130, end: 133 },
        { text: "At all costs", start: 134, end: 140 },
        { text: "If you're ever feeling like you're lost, I'll come find you", start: 141, end: 144 },
        { text: "Man all fronts", start: 145, end: 146 },
        { text: "There's no ocean I won't swim across to be right by you", start: 147, end: 151 },
        { text: "And not just once", start: 152, end: 153 },
        { text: "Here and now, I swear on my response", start: 154, end: 156 },
        { text: "I'll remind you", start: 157, end: 159 },
        { text: "And promise, as one does", start: 160, end: 164 },
        { text: "I, I will protect you at all costs", start: 165, end: 171 },
        { text: "Keep you safe here in my arms", start: 172, end: 178},
        { text: "I, I will protect you at all costs", start: 179, end: 184 },
        { text: "At all costs", start: 185, end: 190 },
    ];
    
    const images = [ 'img1.jpg', 'img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg','img7.jpg','img8.jpg','img9.jpg','img10.jpg',]

    Array.from(document.querySelectorAll(".right-header nav ul li")).forEach((anchor, index) => {
        anchor.addEventListener("click", () => {
           if(window.getComputedStyle(introMessage).display === "flex") {
            introMessage.style.display = 'none';
           }

           allSections.forEach(sect => {sect.style.display = "none"});

           allSections[index].style.display = 'flex';

           switch(index) {

            case 0 : 
                isPlaying = !isPlaying;
                playAnim(isPlaying, anchor);
                break;
            case 1:
                playAnim(false, document.querySelectorAll('.right-header nav ul li')[0]);
                break;
            case 2 :
                playAnim(false, document.querySelectorAll('.right-header nav ul li')[0]);
                break;
           }
           
        })
    });

   

    document.querySelectorAll(".controls-intros button")[0].onclick = function () {
        isPlaying = !isPlaying;
        introMessage.style.display = 'none';
        allSections[0].style.display = 'flex';  
        playAnim(isPlaying,  document.querySelectorAll(".right-header nav ul li")[0]);

    }

    const playAnim =  (state, element) => {
        if(state) {
            element.innerHTML = "&#10074;&#10074;"
            currentAudio.play();

            currentAudio.ontimeupdate = () => {
                const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
                textElement.classList.remove("normal");
                textElement.style.backgroundSize = `${progress}% 100%`; // Adjust background size based on progress
            };
        
            currentAudio.onended = () => {
                element.innerHTML = "&#9654;";
                textElement.style.backgroundSize = "100% 100%"; // Reset fill when finished
                textElement.classList.add("normal");
            }

            isPlaying = true;
            showAimatdBubbles(true);
        }

        else{
            element.innerHTML = "&#9654;"
            currentAudio.pause();
            isPlaying = false;
            showAimatdBubbles(false);
        }

;
    }

    function showAimatdBubbles(playing) {
        const container = document.getElementById("bubble-container");
        const photoContainer = document.querySelector('.photo-container');

        // If not playing, don't do anything
        if (!playing) {
            container.innerHTML = ''; // Clear all bubbles when paused
            return;
        }
            // Create a new bubble element
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");

        const moveBubbles = () => {
            // Get container's dimensions
            const containerRect = photoContainer.getBoundingClientRect();
            
            // Randomly position the bubble within the container's width and height
            const xPos = Math.random() * containerRect.width;
            const yPos = Math.random() * containerRect.height;
            
            bubble.style.top = `${yPos}px`;
            bubble.style.left = `${xPos}px`;
            
            // Append the bubble to the container if not already added
            if (!container.contains(bubble)) {
                container.appendChild(bubble);
            }
        
            // Check if bubble is near the edges and scroll into view if so
            const edgeMargin = 20; // Distance from edge to trigger scroll
            const bubbleRect = bubble.getBoundingClientRect();
        
            // Check if bubble is close to any edge
            if (
                bubbleRect.left < containerRect.left + edgeMargin || // Near left edge
                bubbleRect.right > containerRect.right - edgeMargin || // Near right edge
                bubbleRect.top < containerRect.top + edgeMargin || // Near top edge
                bubbleRect.bottom > containerRect.bottom - edgeMargin // Near bottom edge
            ) {
                bubble.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
            }
        }
        
    
        moveBubbles();

        const textDiv = document.createElement("div");
        textDiv.classList.add('text-div');
        bubble.appendChild(textDiv);
        
        currentAudio.ontimeupdate = function () {

            if(currentLyricsIndex < lyrics.length) {
                const currentLyrics = lyrics[currentLyricsIndex];

                if(currentAudio.currentTime > currentLyrics.start && currentAudio.currentTime < currentLyrics.end) {
                    textDiv.textContent = currentLyrics.text;
                    // Set the new background image and apply the fade-in animation
                    photoContainer.style.backgroundImage = `url(${images[currentImageIndex]})`;
                    photoContainer.classList.add("fade-in");

                    // Remove the fade-in class after the animation completes
                    setTimeout(() => {
                        //photoContainer.classList.remove("fade-in");
                    }, 500); // Match this to the animation duration
                }

                if(currentAudio.currentTime > currentLyrics.end) {
                    currentLyricsIndex++;
                    currentImageIndex = (currentImageIndex + 1) % images.length;
                    setTimeout(function () {
                        moveBubbles();
                    }, 500)
                }
            }


        }
    }
    

    
})