document.addEventListener('DOMContentLoaded', () => {
    const speakerCards = document.querySelectorAll('.speaker-card');
    const modal = document.querySelector('.speaker-modal');
    const closeModal = document.querySelector('.close-modal');
    
    speakerCards.forEach(card => {
      card.addEventListener('click', () => {
        const speakerId = card.getAttribute('data-speaker-id');
        
        // Fetch speaker data based on ID (for this example, it's hardcoded)
        const speakerData = {
          1: { name: 'Yuva', bio: 'Skilled in Java.' },
          2: { name: 'Krishna', bio: 'Experienced in Automation Testing.' },
          3: { name: 'Rajeshwari', bio: 'Skilled in Managing employees.' }
          
        };

       
        modal.querySelector('h2').textContent = speakerData[speakerId].name;
        modal.querySelector('p').textContent = speakerData[speakerId].bio;
        modal.classList.add('show');
        
        document.querySelector('.speaker-slider').style.marginTop = '300px'; // Push slider down
      });
    });
  
    closeModal.addEventListener('click', () => {
      modal.classList.remove('show');
      document.querySelector('.speaker-slider').style.marginTop = '0'; // Reset slider position
    });
  });
  