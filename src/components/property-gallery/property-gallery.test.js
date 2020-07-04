import React from "react";
import renderer from "react-test-renderer";
import PropertyGallery from "../property-gallery/property-gallery.jsx";

const images = [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/studio-01.jpg`];

it(`Render Property Gallery component`, () => {
  const tree = renderer
    .create(<PropertyGallery
      images={images}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
