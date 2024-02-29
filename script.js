// @ts-nocheck
gsap.registerPlugin(ScrambleTextPlugin);

const card3 = document.querySelector('#card-3');
const toggleButton = document.querySelector('.toggle button');
const cards = document.querySelectorAll('.card');
const toggleDiv = document.querySelector('.toggle');
const siteContent = document.querySelector('.site-content');

let isCardOpen = false;

const texts = [
  {
    text: 'CSS',
    scrambleText: 'Design',
  },
  {
    text: 'HTML',
    scrambleText: 'Structure',
  },
  {
    text: 'JavaScript',
    scrambleText: 'Functionality',
  },
];

card3?.addEventListener('click', () => {
  if (!isCardOpen) {
    gsap.to(cards, {
      top: '0px',
      duration: 1,
      ease: 'power4.inOut',
    });

    gsap.to(toggleDiv, {
      delay: 0.4,
      display: 'flex',
      opacity: 1,
      duration: 0.4,
      ease: 'power4.inOut',
    });

    gsap.to(siteContent, {
      filter: 'blur(12px)',
      duration: 0.75,
      ease: 'power4.inOut',
    });

    isCardOpen = true;
  }
});
toggleButton?.addEventListener('click', () => {
  if (isCardOpen) {
    gsap
      .timeline({
        defaults: {
          duration: 1,
          ease: 'power4.inOut',
        },
      })
      .to('#card-1', {
        top: '0px',
      })
      .to(
        '#card-2',
        {
          top: '-100px',
        },
        '<'
      )
      .to(
        '#card-3',
        {
          top: '-200px',
        },
        '<'
      );

    gsap.to(toggleDiv, {
      delay: 0,
      display: 'none',
      opacity: 0,
      duration: 0.4,
      ease: 'power4.inOut',
    });

    gsap.to(siteContent, {
      filter: 'blur(0px)',
      duration: 0.75,
      ease: 'power4.inOut',
    });

    isCardOpen = false;
  }
});
siteContent?.addEventListener('click', () => {
  if (isCardOpen) {
    gsap
      .timeline({
        defaults: {
          duration: 1,
          ease: 'power4.inOut',
        },
      })
      .to('#card-1', {
        top: '0px',
      })
      .to(
        '#card-2',
        {
          top: '-100px',
        },
        '<'
      )
      .to(
        '#card-3',
        {
          top: '-200px',
        },
        '<'
      );

    gsap.to(toggleDiv, {
      delay: 0,
      display: 'none',
      opacity: 0,
      duration: 0.4,
      ease: 'power4.inOut',
    });

    gsap.to(siteContent, {
      filter: 'blur(0px)',
      duration: 0.75,
      ease: 'power4.inOut',
    });

    isCardOpen = false;
  }
});

const scrambleTexts = document.querySelectorAll('.scramble');

scrambleTexts.forEach((e, i) => {
  let content = e.textContent;
  e.addEventListener('click', () => {
    if (content === texts[i].text.toLowerCase()) {
      gsap.to(e, {
        scrambleText: `${texts[i].scrambleText}`,
        duration: 1.5,
        ease: 'power4.inOut',
      });
      content = texts[i].scrambleText;
    } else {
      gsap.to(e, {
        scrambleText: `${texts[i].text}`,
        duration: 1.5,
        ease: 'power4.inOut',
      });
      content = texts[i].text.toLowerCase();
    }
  });
});
