    // TARGET: 28 January 2026 00:00:00 local time IGCSE VERSION
   // const target = new Date(2026, 0, 28, 0, 0, 0); // months are 0-based

   // 7 December 2025, 00:00 local time MOCK ACTIVE:
const target = new Date(2025, 11, 7, 0, 0, 0);


    const countEl = document.getElementById('count');

    function update(){
      const now = new Date();
      let ms = target - now;

      if(ms <= 0){
        document.body.classList.remove('seven-day');
        document.body.classList.add('panic');
        countEl.textContent = "It’s time!";
        return;
      }

      const totalMinutes = Math.floor(ms / 60000);
      const days = Math.floor(totalMinutes / (60*24));
      const hours = Math.floor((totalMinutes % (60*24)) / 60);
      const minutes = totalMinutes % 60;

      // Format as "# days, # hours, # minutes"
      const plural = (n, w) => n + ' ' + w + (n===1? '' : 's');
      countEl.textContent = `${plural(days,'day')}, ${plural(hours,'hour')}, ${plural(minutes,'minute')}`;

      // Style switches:
      const hoursLeft = ms / 3_600_000;
      const daysLeft = ms / 86_400_000;

      // 24h panic theme
      if(hoursLeft <= 24){
        document.body.classList.add('panic');
        document.body.classList.remove('seven-day');
      } else if(daysLeft <= 7){
        // 7-day green static gradient on heading
        document.body.classList.add('seven-day');
        document.body.classList.remove('panic');
      } else {
        document.body.classList.remove('seven-day','panic');
      }
    }

    // Initial tick & interval
    update();
    setInterval(update, 1000);

    // Optional: pause border animation for users who prefer reduced motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    function applyMotionPref(){
      document.documentElement.style.setProperty('--border-speed', mq.matches ? '0s' : '6s');
    }
    applyMotionPref();
    mq.addEventListener?.('change', applyMotionPref);
