import React, { useState } from "react";
import MKTypography from "components/MKTypography";
import "./styles.css";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form>
      <MKTypography variant="h4" mb={1}>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Disposition Score"
          type="text"
          name="firstName"
          required
        />
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Not Transit-Like FPF"
          type="text"
          name="lastName"
          required
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Centroid Offset FPF"
          type="text"
          name="email"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="TCE Planet Number"
          type="text"
          name="password"
          required
        />
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Planetary Radius Upper"
          type="text"
          name="firstName"
          required
        />
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Insulation Flux"
          type="text"
          name="lastName"
          required
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Transit Depth"
          type="text"
          name="email"
          required
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Stellar Eclipse FPF"
          type="text"
          name="password"
          required
        />
        <button type="submit"> Predict </button>
      </MKTypography>
    </form>
  );
}
export default Form;
