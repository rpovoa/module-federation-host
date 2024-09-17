import React from 'react';
import ReactDOM from 'react-dom';
 
// Dynamically load the remote Button component
const RemoteButton = React.lazy(() => import('app_remote/Button'));
 
const App = () => (
<div>
<h1>Host Application</h1>
<React.Suspense fallback="Loading Button...">
<RemoteButton />
</React.Suspense>
</div>
);
 
ReactDOM.render(<App />, document.getElementById('root'));