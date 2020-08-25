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

### Publishing
<ul>
  <li>Publish from Metro Bundler</li>
  <ul>
    <li>Click <code>Publish or Republish project...</code></li>
	<ul>
      <li>This will start asking you questions</li>
	  	<ul>
      		<li>Name: name found in <code>app.json</code></li>
			<li>Slug: slug found in <code>app.json</code>, eventually becomes part of the expo URL</li>
			<li>GitHub Source URL: githubUrl found in <code>app.json</code>optional, but self-explanatory</li>
			<li>Description: description found in <code>app.json</code>, optional but self-explanatory</li>
    	</ul>
		<ul>
    		<li>This may redirect you to the command line if you are not signed in to an Expo account.</li>
  		</ul>
    </ul>
    <li>Publishes your app to <code>https://expo.io/@{username}/{slug}</code></li>
  </ul>
  <li>Publish from command line</li>
  <ul>
    <li>Does the same as above, but all in the command line</li>
  </ul>
</ul>

### Components
<ul>
  <li>View</li>
  <ul>
    <li>Most basic component in React Native</li>
	<li>Functions like a div in HTML</li>
	<ul>
      <li>This will start asking you questions</li>
</ul>
  </ul>
  <li>Styling</li>
  <ul>
  <li> Make sure you don't place elements where they could be covered by the iPhone notch</li>
  <ul>
  	<li>Import and use <code>SafeAreaView</code> in place of <code>View</code></li>
	<ul>
  	<li>Adds a bit of padding at the top so content isn't covered up by the notch</li>
  </ul>
  </ul>
      	<li>flex: when set to 1, means that the view is flexible and will grow both horizontally and vertically to fit the free space</li>
		<li>backgroundColor: the backgroung color, can be set using RGB values like in web apps or named colors</li>
		</ul>

</ul>

### Miscellaneous Tips
<ul>
 <li> Multi-cursor Editing: <code>ctrl-d</code> when highlighting text lets you edit all the instances of that text at once</li>
</ul>
