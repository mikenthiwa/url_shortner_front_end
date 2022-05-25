import {useEffect, useState} from "react";
import {fetchLinks} from "../services";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast } from 'react-toastify';
import { Circles } from "react-loader-spinner";
import './results.css';


const LinksComponent = ({inputValue}: {inputValue: string}): JSX.Element => {
  const [links, addLinks] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetch = async () => {
    try {
      setLoading(true)
      const shortUrls =  await fetchLinks();
      addLinks(shortUrls)
    } catch (error) {
      toast.error('Something went wrong')
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetch();
  }, [inputValue])


  return (
    <div className="shortened-link-results-container">
      {loading && <Circles ariaLabel="loading-indicator"/>}
      <ul>
        {
          links.length > 0 && links.map((value: any, idx: number) => (
            <li key={idx}>
              <div>{value.shortUrl}</div>
              <CopyToClipboard text={value.shortUrl}>
                <button className="copyToClipBoard">Copy to Clipboard</button>
              </CopyToClipboard>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default LinksComponent
