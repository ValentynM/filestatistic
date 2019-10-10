'use strict';

class Page extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="background-image"></div>
        <div className="file-upload-section">
            <div className="first-rect">
                <div className="second-rect">
                    <h1 className="header">Hello world!</h1>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('page-container')
);