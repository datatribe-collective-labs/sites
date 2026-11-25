// PARTNERS LOGO SLIDER (infinite-style with smooth wrap)
document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.partners-track');
  const originalItems = Array.from(document.querySelectorAll('.partner-logo'));

  if (!track || originalItems.length === 0) return;

  const visibleCountDesktop = 3;
  let visibleCount = visibleCountDesktop;
  let index = 0;
  let itemCount = originalItems.length;
  let intervalId = null;

  // Ensure base state
  track.innerHTML = '';
  originalItems.forEach(item => track.appendChild(item));

  function setupClones() {
      // Remove old clones if any
      track.querySelectorAll('.partner-logo.clone').forEach(c => c.remove());

      // Clone only as many as we show at once
      const clonesToAdd = Math.min(visibleCount, itemCount);
      for (let i = 0; i < clonesToAdd; i++) {
          const clone = originalItems[i].cloneNode(true);
          clone.classList.add('clone');
          track.appendChild(clone);
      }
  }

  function updateVisibleCount() {
      const width = window.innerWidth;
      if (width <= 550) {
          visibleCount = 1;
      } else if (width <= 800) {
          visibleCount = 2;
      } else {
          visibleCount = visibleCountDesktop;
      }

      // Rebuild clones for current layout
      setupClones();

      // Reset index safely
      index = Math.min(index, itemCount);
      applyTransform(true); // jump, no animation
  }

  function applyTransform(skipTransition) {
      if (skipTransition) {
          const prevTransition = track.style.transition;
          track.style.transition = 'none';
          const shiftPercent = -(index * (100 / visibleCount));
          track.style.transform = `translateX(${shiftPercent}%)`;
          // force reflow
          void track.offsetWidth;
          track.style.transition = prevTransition || '';
      } else {
          const shiftPercent = -(index * (100 / visibleCount));
          track.style.transform = `translateX(${shiftPercent}%)`;
      }
  }

  function slidePartners() {
      if (itemCount <= visibleCount) return;

      index++;
      applyTransform(false);

      // When we've slid into the cloned area (showing first items from the right),
      // after the transition ends, jump back to the real first item with no visual jump.
      if (index === itemCount) {
          const handleTransitionEnd = () => {
              track.removeEventListener('transitionend', handleTransitionEnd);
              index = 0;
              applyTransform(true); // instant jump back
          };
          track.addEventListener('transitionend', handleTransitionEnd);
      }
  }

  function startLoop() {
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(slidePartners, 3000);
  }

  updateVisibleCount();
  window.addEventListener('resize', () => {
      updateVisibleCount();
      startLoop();
  });

  // Make sure track has a transition in CSS, e.g.:
  // .partners-track { display:flex; transition: transform 0.6s ease; }
  startLoop();
});
//meet up update
// ====================================
// UPDATE THIS BLOCK FOR EACH NEW MEETUP
// Set it to null between events: the page then shows the
// "Currently no scheduled events" section instead of the card.
// ====================================
const upcomingEvent = {
  title: "Data & AI Exchange: Helsinki",
  date: "Thu, Dec 3, 2026 · 17:00–19:30",
  address: "Innovation Home Kamppi, Kansakoulukatu 3, 00100 Helsinki",
  eventUrl: "https://www.meetup.com/datatribe-meetup-group/events/317284529/"
};
// ====================================
// Only the ribbon exists on every page; the meetup card and the
// "no scheduled events" section are on events.html only.
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setAttr(id, attr, value) {
  const el = document.getElementById(id);
  if (el) el.setAttribute(attr, value);
}

function setShown(id, shown) {
  const el = document.getElementById(id);
  if (el) el.style.display = shown ? "" : "none";
}

function renderEvent(event) {
  // events.html carries two blocks: the meetup card for a real event and a
  // "Currently no scheduled events" section. Only one may ever be visible.
  setShown("event-ribbon", Boolean(event));
  setShown("upcoming-meetup", Boolean(event));
  setShown("no-upcoming-events", !event);

  if (!event) return;

  setText("ribbon-event-title", event.title);
  setAttr("ribbon-event-link", "href", event.eventUrl);
  setText("meetup-title", event.title);
  setText("meetup-time", `📅 ${event.date}`);
  setText("meetup-address", `📍 ${event.address}`);
  setAttr("meetup-link", "href", event.eventUrl);
  setAttr("meetup-map-frame", "src",
    `https://maps.google.com/maps?q=${encodeURIComponent(event.address)}&output=embed`);
}

renderEvent(upcomingEvent);
// Position the ribbon below the header
function positionRibbon() {
  const header = document.querySelector("header");
  const ribbon = document.getElementById("event-ribbon");
  if (header && ribbon) {
    ribbon.style.top = `${header.offsetHeight}px`;
  }
}

positionRibbon();
window.addEventListener("resize", positionRibbon);