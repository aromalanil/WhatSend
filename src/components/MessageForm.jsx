import { useState } from 'react';

import Tab from './Tab';
import PersonalMessage from './PersonalMessage';
import BroadcastMessage from './BroadcastMessage';

function MessageForm() {
  const [activeTab, setActiveTab] = useState('Personal');

  return (
    <div className="message-form">
      <Tab
        activeTab={activeTab}
        tabValues={['Personal', 'Broadcast']}
        setActiveTab={setActiveTab}
      />
      {activeTab === 'Personal' && <PersonalMessage />}
      {activeTab === 'Broadcast' && <BroadcastMessage />}
    </div>
  );
}

export default MessageForm;
