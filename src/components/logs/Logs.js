import React, { useEffect } from "react";
import { connect } from "react-redux";
import LogItem from "./LogItem";
import Preloader from "../layout/Preloader";
import { getLogs } from "../../actions/logActions";
import PropTypes from "prop-types";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return <Preloader />;
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No Logs to show...</p>
      ) : (
        logs.map(log => (
          <LogItem key={log.id} log={log}>
            {log.message}
          </LogItem>
        ))
      )}
    </ul>
  );
};

Logs.propTypes = {
  logs: PropTypes.object,
  getLogs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  log: state.log
});

export default connect(
  mapStateToProps,
  { getLogs }
)(Logs);
