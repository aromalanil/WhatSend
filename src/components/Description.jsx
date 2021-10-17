import demo from '../img/demo.webp';
import { appName } from '../utils/constants';

function Description() {
  return (
    <div className="description">
      <div className="content">
        <h1>Whats is {appName} ?</h1>
        <p>
          Whatsapp only let&apos;s you make calls or send messages to the numbers present in your
          contact.
        </p>
        <p>
          But what if you don&apos;t want a person in your contact but still want to send a message
          to him/her?
        </p>
        <p>
          And that&apos;s where {appName} comes in. Just fill the fields and press &quot;Send
          Message&quot; button.
        </p>
      </div>
      <div className="img-wrapper">
        <img className="demo-image" src={demo} alt="demo-img" />
      </div>
    </div>
  );
}

export default Description;
