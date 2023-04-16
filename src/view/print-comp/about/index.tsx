import lang from "../../../data/lang";
import { useLangStore } from "../../../hooks/lang-state"
import './style.scss'

function PAbout() {
  const { lng } = useLangStore();

  return (
    <div className="p-about">
      <p dangerouslySetInnerHTML={{ __html: lang[lng]["about1"] }}></p>
      <p dangerouslySetInnerHTML={{ __html: lang[lng]["about2"] }}></p>
      <p dangerouslySetInnerHTML={{ __html: lang[lng]["about3"] }}></p>
      <p dangerouslySetInnerHTML={{ __html: lang[lng]["about4"] }}></p>
    </div>
  )
}

export default PAbout;