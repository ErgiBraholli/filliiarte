import React from "react";

/**
 * Atmosphere — fixed, non-interactive overlays that sit above everything
 * to give the whole site depth and a tactile, cinematic finish:
 *   · film grain (animated SVG noise)
 *   · soft vignette
 * Kept in one fixed layer so it never causes layout shift.
 */
const Atmosphere = () => (
  <div className="atmosphere" aria-hidden="true">
    <div className="atmosphere__grain" />
    <div className="atmosphere__vignette" />
  </div>
);

export default Atmosphere;
