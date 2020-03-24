const StatusPanel = ({ code, name, startAction, stopAction }) => (
  <>
    <p>
      {name} (code {code})
    </p>
    <p>
      <button onClick={startAction}>Start</button>
      <button onClick={stopAction}>Stop</button>
    </p>
  </>
);

export default StatusPanel;
