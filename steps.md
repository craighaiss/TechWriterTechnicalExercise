# Steps for Implementing the Veeva CRM Candidate Technical Exercise

__Description__: This document describes the steps I took to implement the Veeva CRM Candidate Technical Exercise.

## Create a new instance of the repository
Before making changes to the TechWriterTechnicalExercise code, you will need to create a new repository based on the original files. Follow these steps to clone the repository from GitHub and then upload the files to a new repository.

1. To clone the repository, open Windows Command Prompt and enter `git clone https://github.com/CRMDoc/TechWriterTechnicalExercise.git`.
2. Enter `cd TechWriterTechnicalExercise` to navigate to the directory for the cloned repository.
3. Enter `code .` to launch the Visual Studio Code editor.
4. In your web browser, navigate to https://github.com/ and provide your login credentials.
5. Create a new repository by clicking the New button in the Repositories window on the left side of the screen.
6. Enter **TechWriterTechnicalExercise** in the Repository name field, then click the Create repository button.
7. In the Command Prompt window, enter `git commit -m "First commit"`.
8. Enter `git remote set-url origin https://github.com/[craighaiss]/TechWriterTechnicalExercise.git` to set the remote origin for the new repository.
9. Enter `git push -u origin master` to push the files to the remote repository in GitHub.

The TechWriterTechnicalExercise project files and README should now be visible when you view the new repository in GitHub.

## Create a branch to store your code changes
Before editing the project files, follow these steps to create a branch in git. This will prevent you from overwriting the master branch with your changes.

1. In the Command Prompt, verify that you are in the directory containing the TechWriterTechnicalExercise project, then enter `git checkout -b feature/incorporate-suggested-edits master`.
2. Enter `code .` to open the project files in Visual Studio Code.
3. Incorporate all requested changes.

## Incorporate HTML changes

### Optimize and prefetch the jellyfish image
Follow the steps below to optimize jellyfish.jpg, save it as a .png image, and then prefetch the image for faster loading.

1. In your browser, navigate to https://squoosh.app/.
2. Open the Plus sign and browse to the jellyfish.jpg file in your project's /Resources/ folder. Squoosh will show a comparison of the original image and the compressed version. In this case, it shows a 70 percent reduction in file size, from 78.5kb to 23.8kb.
3. Click the Download button in the lower right corner of the screen. The compressed file is saved in your Downloads folder.
4. Copy the compressed jellyfish.jpg from your Downloads folder and paste it into the project's /Resources/ folder, overwriting the original image.
5. In VS Code, open index.html.
6. Enter the following code between the opening and closing `<head>` tags.
    ```html
    <link rel="prefetch" href="./Resources/jellyfish.jpg" />
    ```
7. Change the file extension of the image reference from `.png` to `.jpg`. Using JPG results in a much smaller image file and will improve page performance without a loss in image quality.
8. Save index.html and open it in a browser to verify the image appears.

### Incorporate additional HTML changes
Follow the steps below to incorporate additional changes to the HTML code.
1. In index.html, add the following code between the opening and closing `<head>` tags.
    ```html
    <script src="main.js"></script>
    <link rel="stylesheet" href="styles.css">
    ````
2. In the code for the Click Here button, insert `https://www.veeva.com/` as the target for the href, and add the attribute ` target="_blank"`.
3. Add a class name **twoColumns** to the grid containing the lorem ipsum text, so that we can separate it into two columns.
    ```html
    <div class="twoColumns">
    ```
4. Open styles.css and add the following code to format the lorem ipsum text as two columns with padding.
    ```css
    .twoColumns {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      padding: 20px;
    }
    ```
5. In index.htm, enter the following code between the banner div and the lorem ipsum div to create a form.
    ```html
    <form>
      <p>  
        <input type="checkbox" id="optimize" name="optimize" checked>
        <label for="optimize">Optimize</label>
      </p>

      <p>
        <label for="modules">Choose a module:</label>

        <select name="modules" id="modules">
          <option value="inventoryMonitoring">Inventory Monitoring</option>
          <option value="orderManagement">Order Management</option>
          <option value="myInsights">MyInsights</option>
        </select>
      </p>

      <p>
        <label for="fullName">Full name:</label><br>
        <input id="fullName" name="fullName" type="text" />
      </p>

      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
    ```
6. Save your changes to index.html and styles.css.

## Incorporate CSS changes
### Update styles
Follow the steps below to incorporate the requested changes to the .css code.
1. Open styles.css.
2. For the .header-bar class, set `position: sticky;`, and add `top: 0;` and `z-index: -1;`. This will fix the position of the header bar and ensure that it never overlaps other page elements when scrolling.
3. To change the button color on hover, add the following style definition.
    ```css
    .btn:hover {
      background-color: #1b2f54;
    }
    ```
4. For the IMG style definition, add `width: 100%` to make the image cover the width of the page.
5. For the `.btn:link, .btn:visited` style definition, change the background-color to #ee7426. This will set the default color of the button to Veeva orange.
6. For the `.header-bar p` style definition, change the display from `none` to `block`.
7. For the `h1` style definition, add `text-align: left;`.
8. For the `.banner` style definition, change the text-align property to `center`. The "Hello!" text and "Click Here" button should now appear in the center of the hero image.
9. For the `.twoColumns` style definition, add `border: solid 2px lightgray;` to create a light gray border.
10. For the `*` style definition, add `font-family: Roboto, sans-serif;` to use the Roboto font for all page text. [[CEH note: Not sure if you wanted instructions here for loading the TTF font into the page, or just the CSS setting.]]

### Format the text columns
Now, let's add DIV tags to the lorem ipsum columns so that we can apply styling and link one of the DIVs to the Veeva website.
1. In index.html, wrap the eight paragraphs in DIV tags with unique names. Each DIV should contain four paragraphs.
    ```html
      <div class="column1">
        <p>Lorem ipsum...</p>
        <p>Lorem ipsum...</p>
        <p>Lorem ipsum...</p>
        <p>Lorem ipsum...</p>
      </div>
      <div class="column2">
        <p>Lorem ipsum...</p>
        <p>Lorem ipsum...</p>
        <p>Lorem ipsum...</p>
        <p>Lorem ipsum...</p>
      </div>
    ```
2. Add an onclick attribute to the second column to change the location and specify the Veeva website as the link target.
    ````html
    <div class="column2" onclick="location.href='https://www.veeva.com';">
3. In styles.css, create a new style definition for the second column, and set the cursor style to `pointer`.
    ```css
    .column2 {
      cursor: pointer;
    }
    ```
4. Save your changes to styles.css and index.html.

### Add styles for form elements
Follow these steps to add the specified formatting to the form elements.
1. Open styles.css.
2. Add a new style definition for the form element, and include the following properties.
    ```css
    form {
      margin-top: 10px;
      text-align: center;
      background-color: gray;
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    ````
3. To make the Submit button take up the entire width of the form, let's add a style definition with a CSS attribute selector, since this input has no class name.
    ```css
    input[type="submit"] {
      width: 100%;
    }
    ``` 
4. Save your changes to styles.css.

## Incorporate JavaScript Changes

### Load the jQuery library
We will load the jQuery library via a CDN hosted by Google. This will prevent the need to store and maintain the library within our project files.

1. Open index.html.
2. Between the opening and closing `<head>` tags, add the following code.
    ```html
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    ```
3. Save index.html.

### Output text in an alert when the site loads
Follow the steps below to display text in an alert when the site is finished loading.
1. Open main.js.
2. Update the `window.onload` function and add code to display an alert.
    ```javascript
    window.onload = function(){
      alert('Website has finished loading!')
    };
    ```
3. Save main.js.

### Create an alert to display form values
Follow the steps below to create an alert that displays form values when the Submit button is clicked.
1. Open index.html.
2. Update the `<form>` tag to launch a JavaScript function called "showValues."
    ```html
    <form onsubmit="showValues()">
    ```
3. Save index.html.
4. Open main.js.
5. Add a function to display the values from the form.
    ```javascript
    function showValues() {
      var checkboxValue = document.getElementById("optimize").value;
      var modulesValue = document.getElementById("modules").value;
      var fullNameValue = document.getElementById("fullName").value;
      alert("Optimize: " + checkboxValue + "\nSelected Module: " + modulesValue + "\nFull Name" + fullNameValue);
    }
6. Save main.js.

## Review content for errors prior to publishing
Before submitting or publishing content, you should review all updated documents for errors. It helps to follow a checklist of issues to address when proofing your work. For details, see [22 things to check before publishing a technical manual](https://www.techwritingauthority.com/2021/09/22-things-to-check-before-publishing.html).


## Commit changes and push them to GitHub
1. Open a Command Prompt window.
2. Navigate to the root directory for your project.
3. Enter the following commands to include all changed files, create a commit message, and push the updated files to the remote origin.
    ```console
    git add --all
    git commit -m "Incorporated requested changes"
    git push -u origin feature/incorporate-suggested-edits
    ```
The changes you made to the branch should now be stored in GitHub. You can use the GitHub interface to create a Pull Request so that your changes can be merged into the master branch.
