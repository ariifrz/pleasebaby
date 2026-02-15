// Mengambil data dari window.VALENTINE_CONFIG yang didefinisikan di index.html
export const VALENTINE_DATA = (window as any).VALENTINE_CONFIG || {
  initials: "C",
  recipientName: "Valentine",
  mainQuestion: "would you be my valentine?",
  openingPhoto: "https://i.ibb.co.com/Lhzx8Szg/Untitled-design-5.png",
  saveTheDate: {
    day: "14",
    month: "FEBRUARY",
    year: "2026",
    time: "19.00 - ??",
    location: "@ UR HOME BUBBY"
  },
  letter: {
    greeting: "Dear my love",
    body: "Happy Valentine!",
    closing: "With love."
  },
  photos: [],
  colors: {
    primary: "#701111",
    accent: "#d4af37",
    bg: "#fdf2f2"
  }
};