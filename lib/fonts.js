import FontFaceObserver from "fontfaceobserver";

export const loadFonts = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css?family=Josefin+Sans:400,700&display=swap";
  link.rel = "stylesheet";

  document.head.appendChild(link);

  const roboto = new FontFaceObserver("Roboto");

  roboto.load().then(() => {
    document.documentElement.classList.add("roboto");
  });
};
