function Tab({ activeTab, tabValues, setActiveTab }) {
  return (
    <div className="tab">
      {tabValues.map((value) => (
        <div
          key={value}
          role="button"
          tabIndex={0}
          className={`tab-item ${value === activeTab ? 'active-tab' : ''} `}
          onClick={() => setActiveTab(value)}
        >
          {value}
        </div>
      ))}
    </div>
  );
}

export default Tab;
