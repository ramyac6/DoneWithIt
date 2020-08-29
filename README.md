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
  </ul>
  <li>Text</li>
  <ul>
    <li><code>numberOfLines</code></li>
		<ul>
		  <li>Will truncate a really long line of text</li>
		  <li>Without this, <code>Text</code> will wrap around</li>
		</ul>
	<li><code>onPress</code></li>
		<ul>
		  <li>Executes some function when the element is pressed</li>
		  <li>Can use single line function inline or an outside function</li>
		</ul>
  </ul>
  <li>Image</li>
  <ul>
    <li><code>source</code></li>
		<ul>
		  <li>Local images</li>
		  <ul>
		    <li>Source is written using <code>requires</code>: <code>source={require("[insert local path to image]]")}</code></li>
        <li>React Native reads the metadata of the image to interpret the dimensions</li>
		  </ul>
      <li>Network images</li>
		  <ul>
		    <li>Source is written using <code>Object</code>: <code>source={{ width: 200, height: 300, uri: "[insert link to image]" }}</code></li>
        <li>Need to manually list the dimensions</li>
		  </ul>
		</ul>
	<li>Props</li>
		<ul>
		  <li><code>blurRadius</code>: radius of the blur filter to be added to the image</li>
      <li><code>loadingIndicatorSource</code>: will display a local image will the actual image is being downloaded</li>
      <li><code>fadeDuration</code>: fades in the image as it's loaded, only supported in Android</li>
      <li><code>resizeMode</code>: if your specified image dimensions don't match the expected dimensions</li>
		</ul>
  </ul>
  <li>Touchable</li>
  <ul>
    <li><code>TouchableWithoutFeedback</code></li>
		<ul>
		  <li><code>onPress</code></li>
		  <ul>
		    <li>normal tap</li>
		  </ul>
		</ul>
    <ul>
		  <li><code>onLongPress</code></li>
		  <ul>
		    <li>long tap</li>
		  </ul>
		</ul>
	<li><code>TouchableOpacity</code></li>
		<ul>
		  <li>Same function as <code>TouchableWithoutFeedback</code> but changes the opacity of the image when touched, makes it lighter</li>
		</ul>
    <li><code>TouchableHighlight</code></li>
		<ul>
		  <li>Same function as <code>TouchableWithoutFeedback</code> but highlights the image when touched, makes it darker</li>
		</ul>
    <li><code>TouchableNativeFeedback</code></li>
		<ul>
		  <li>Only available on Android, gives error on iOS</li>
      <li>Doesn't function well with images but does a cicle expanding thing when tapped on a View or something with a background</li>
		</ul>
  </ul>
  <li>Button</li>
  <ul>
    <li>Fairly straightforward</li>
    <li>On iOS shows up as clickable text, on Android shows up as rectangular button</li>
  </ul>
  <li>Alert</li>
  <ul>
    <li>Not a component but is treated like an API (object with methods)</li>
    <li>Creates an alert in the native OS</li>
    <li><code>Alert.alert</code></li>
    <ul>
      <li>Displays a method</li>
    </ul>
    <li><code>Alert.prompt</code></li>
    <ul>
      <li>Diplays a question which we get an answer from, only works on iOS</li>
    </ul>
  </ul>
  <li>Platform</li>
  <ul>
    <li>Can detect what OS the device is running</li>
    <li>Good for adjusting style (e.g. <code>SafeAreaView</code> only works on iOS</li>
    <li><code>StatusBar</code></li>
    <ul>
      <li>Can get us the height of the status bar as it varies from Android to Android</li>
    </ul>
  </ul>
  <li>Styling</li>
  <ul>
    <li>Not based on CSS</li>
    <li>Using <code>StyleSheet.create</code> allows for validation checking for spelling mistakes and things</li>
    <li>Can pass multiple style components, right-most one will override the left-most ones</li>
    <li>Dimensions</li>
    <ul>
      <li>Density-independent Pixels (DIPS)</li>
      <ul>
        <li>Physical Pixels = DIPs x Scale Factor</li>
        <li>So using exact numbers doesn't guarantee the same size across different devices</li>
        <li>Can use percentages to express how much of the screen we wish to cover (e.g. <code>width: '50%'</code>)</li>
      </ul>
      <li>Dimensions API</li>
      <ul>
        <li><code>Dimensions.get("window" or "screen")</code></li>
        <ul>
        <li>screen returns the size of the screen, window returns the size of the app window</li>
        <li>both are same on iOS, window is smaller than screen on Android (StatusBar)</li>
      </ul>
        <li>Doesn't get updated when the orientation changes</li>
      </ul>
      </ul>
      <li><code>react-native-community/hooks</code></li>
      <ul>
        <li>Outside library to interpret screen orientation</li>
        <ul>
          <li><code>useDimensions</code>: gets the dimensions of the screen and updates on orientation change</li>
          <li><code>useDeviceOrientation</code>: returns true/false for portrait vs landscape</li>
        </ul>
      </ul>
    <li> Make sure you don't place elements where they could be covered by the iPhone notch</li>
  <ul>
    <li>Import and use <code>SafeAreaView</code> in place of <code>View</code></li>
    <ul>
      <li>Adds a bit of padding at the top so content isn't covered up by the notch</li>
    </ul>
  </ul>
      <li><code>flex</code>: when set to 1, means that the view is flexible and will grow both horizontally and vertically to fit the free space</li>
      <ul>
        <li>Can nest flex components and they will grow to fit the outer component</li>
        <li>By default components are aligned vertically</li>
        <ul>
        <li>Set <code>flexDirection</code> to "row" to align horizontally</li>
        <ul>
          <li>Primary access is across the phone, cross axis is up and down</li>
        </ul>
        <li>Set <code>flexDirection</code> to "row-reverse" to align horizontally from right</li>
        <li>Set <code>flexDirection</code> to "column-reverse" to align vertically from the bottom</li>
      </ul>
      </ul>
      <li><code>backgroundColor</code>: the background color, can be set using RGB values like in web apps or named colors</li>
      <li><code>justifyContent</code>: justifies content along whatever is the main axis</li>
      <li><code>alignItems</code>: justifies content along whatever is the cross axis</li>
      <ul>
      <li><code>alignSelf</code>: align just the item</li>
      </ul>
  </ul>
</ul>

### Miscellaneous Tips

<ul>
 <li> Multi-cursor Editing: <code>ctrl-d</code> when highlighting text lets you edit all the instances of that text at once</li>
 <li> Move blocks of code up/down: <code>alt-[up arrow/down arrow]</code> after highlighting text lets you move that text up or down</li>
 <li> Duplicate code blocks: <code>shift-alt-down arrow</code> after highlighting text duplicates the text below it</li>
 <li> Show all options for code: <code>ctrl-space</code> will bring up a menu of all available things you can type there</li>
</ul>
