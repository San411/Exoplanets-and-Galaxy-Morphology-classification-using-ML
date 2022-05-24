import React, { useState } from "react";
import MKTypography from "components/MKTypography";
import "./styles.css";

function Form() {
  const [dispositionScore, setDispositionScore] = useState("");
  const [ntlpfp, setNtlpfp] = useState("");
  const [cofpf, setCofpf] = useState("");
  const [tcepn, setTcepn] = useState("");
  const [pru, setPru] = useState("");
  const [insflux, setInsflux] = useState("");
  const [trdepth, settrdepth] = useState("");
  const [sefpf, setSefpf] = useState("");
  return (
    <form
        action="http://127.0.0.1:5000/exoplanet"
        method="post"
        id="upload-form"
        encType="multipart/form-data"
      >
      <MKTypography variant="h4" mb={1}>
        <input
          value={dispositionScore}
          onChange={(e) => setDispositionScore(e.target.value)}
          placeholder="Disposition Score"
          type="text"
          name="dispositionScore"
          required
        />
        <input
          value={ntlpfp}
          onChange={(e) => setNtlpfp(e.target.value)}
          placeholder="Not Transit-Like FPF"
          type="text"
          name="ntlpfp"
          required
        />
        <input
          value={cofpf}
          onChange={(e) => setCofpf(e.target.value)}
          placeholder="Centroid Offset FPF"
          type="text"
          name="cofpf"
          required
        />
        <input
          value={tcepn}
          onChange={(e) => setTcepn(e.target.value)}
          placeholder="TCE Planet Number"
          type="text"
          name="tcepn"
          required
        />
        <input
          value={pru}
          onChange={(e) => setPru(e.target.value)}
          placeholder="Planetary Radius Upper"
          type="text"
          name="pru"
          required
        />
        <input
          value={insflux}
          onChange={(e) => setInsflux(e.target.value)}
          placeholder="Insulation Flux"
          type="text"
          name="insflux"
          required
        />
        <input
          value={trdepth}
          onChange={(e) => settrdepth(e.target.value)}
          placeholder="Transition depth"
          type="text"
          name="trdepth"
          required
        />
        <input
          value={sefpf}
          onChange={(e) => setSefpf(e.target.value)}
          placeholder="Stellar Eclipse FPF"
          type="text"
          name="sefpf"
          required
        />
        <button type="submit"> Predict </button>
      </MKTypography>
    </form>
  );
}
export default Form;
