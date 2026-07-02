🚨 Focus Monitor

A frictionless, zero-dependency web application to enforce deep work and eliminate mindless context-switching.

📖 About the Project:

In an era of endless digital distractions, maintaining cognitive flow state is the ultimate competitive advantage. Focus Monitor is a psychological friction tool designed to break the habit of mindless tab-switching.
Rather than relying on invasive browser extensions or external software, this application operates entirely within a single, local HTML file. It leverages native browser APIs to monitor your attention and delivers immediate, high-urgency auditory and visual feedback the moment you abandon your primary task.

✨ Key Features:

Dual-Mode Tracking:

Flexible Mode (Tabs): Understands that sometimes you need to check a reference. Allows you one "grace period" tab switch, accompanied by a gentle warning beep. A second switch triggers the full alarm.

Strict Mode (Windows): Zero tolerance. The alarm triggers instantly upon any loss of window focus.

Custom Synthesis Audio Engine: No external .mp3 or .wav files are required. The application uses the browser's Web Audio API to synthesize a jarring, 3-loop "Red Alert" klaxon (alternating 600Hz and 800Hz square waves) to instantly snap your attention back.

Bypasses Notification Blockers: Modern browsers throttle native alert() popups in background tabs. Focus Monitor uses a custom-built, full-screen red HTML modal to ensure the visual and auditory intervention fires immediately, even when hidden.

100% Local & Private: Runs entirely client-side. No tracking, no data collection, no servers, and no installations required.

🧠 How It Works (Under the Hood):

Due to strict modern browser sandboxing (which prevents websites from spying on your other open tabs), Focus Monitor uses a clever workaround to track your attention:

The Page Visibility API (visibilitychange): Detects when the application tab is hidden (e.g., when you open a new tab or switch to another existing tab).

The Window Blur Event (blur): Detects when you click completely outside the browser into another operating system application.

State Tracking: Instead of trying to count the exact number of tabs you have open (which is impossible for a standard webpage), the app tracks "Focus Abandonment Events" to enforce its rules.

🚀 Getting Started:

Because Focus Monitor is a single-file application, there is no build process or complex installation.

Prerequisites:

A modern web browser (Google Chrome, Edge, Brave, or Firefox).

Usage:

Download the index.html file from this repository.

Double-click the file to open it in your browser.

Select your preferred monitoring mode from the dropdown menu.

Click "Enable Focus Mode".

Leave the tab open and begin your deep work.

🛠️ Built With:

HTML5: Semantic structure and custom modal UI.

CSS3: Clean, minimal styling with CSS variables and keyframe animations.

Vanilla JavaScript (ES6+): Core logic and event listeners.

Web Audio API: For real-time, browser-native sound synthesis.

👨‍💻 Author:

Piyush Sahoo.
A side project built to explore browser APIs and optimize personal productivity.
