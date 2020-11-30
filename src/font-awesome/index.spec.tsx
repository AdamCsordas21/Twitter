import React, { FC } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dummyIcon } from ".";
import { render } from "@testing-library/react";

describe("font awesome testing helper", () => {
  it("provides dummy icon that does nothing", () => {
    const INeedIconDefinition: FC<{ icon: IconDefinition }> = ({ icon }) => (
      <FontAwesomeIcon icon={icon} />
    );
    const icon = dummyIcon;

    render(<INeedIconDefinition icon={dummyIcon} />);
  });
});
