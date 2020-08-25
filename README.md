# DoneWithIt

This code is my work, but done by following a tutorial at https://www.youtube.com/watch?v=0-S5a0eXPoc

## Things I've Learned
### Debugging
<ul>
  <li>Debug code using Chrome Developer Tools</li>
  <ul>
    <li>Shake physical device or <code>ctrl-m</code> on emulator to launch developer menu</li>
    <li>Enable Remote JS Debugging</li>
    <li><code>ctrl-shift-j</code> to open Developer Tools</li>
    <li>Go to sources tab, pause on caught exceptions</li>
	<li>Disable Remote JS Debugging when done</li>
  </ul>
  <li>Debug code within VSCode</li>
  <ul>
    <li>Go to <code>launch.json</code> and add a new configuration</li>
	<li>Change port number for VSCode</li>
    <ul>
      <li>Go to <code>Preferences</code> and then <code>Settings</code>.</li>
      <li>Look up <code>react-native.package.port</code>  and change to the one that is shown by <code>localhost</code></li>
    </ul>
    <li>Close the Chrome Developer Tools window if it's open.</li>
	<ul>
      <li>You can either be debugging with Chrome Developer Tools or VSCode, not both at the same time</li>
    </ul>
	<li>Reload Expo</li>
	<li>When done debugging, disconnect from app and reload.</li>
	<li>Disable Remote JS Debugging when done</li>
  </ul>
</ul>
