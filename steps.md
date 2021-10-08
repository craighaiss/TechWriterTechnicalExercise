# Steps for Implementing the Veeva CRM Candidate Technical Exercise

__Description__: This document describes the steps I took to implement the Veeva CRM Candidate Technical Exercise.

## Create a new instance of the repository
Before making changes to the TechWriterTechnicalExercise code, you will need to create a new repository based on the original files. Follow these steps to clone the repository from GitHub and then upload the files to a new repository.

1. To clone the repository, open Windows Command Prompt and enter `git clone https://github.com/CRMDoc/TechWriterTechnicalExercise.git`.
2. Enter `cd TechWriterTechnicalExercise` to navigate to the directory for the cloned repository.
3. Enter `code .` to launch the Visual Studio code editor.
4. In your web browser, navigate to https://github.com/ and provide your login credentials.
5. Create a new repository by clicking the New button in the Repositories window on the left side of the screen.
6. Enter **TechWriterTechnicalExercise** in the Repository name field, then click the Create repository button.
7. In the Command Prompt window, enter `git commit -m "First commit"`.
8. Enter `git remote set-url origin https://github.com/[craighaiss]/TechWriterTechnicalExercise.git` to set the remote origin for the new repository.
9. Enter `git push -u origin master` to push the files to the remote repository in github.

The TechWriterTechnicalExercise project files and Readme should now be visible when you view the new repository in GitHub.

## Create a branch to store your code changes
Before editing the project files, follow these steps to create a branch in git. This will prevent you from overwriting the master branch with your changes.

1. In the Command Prompt, verify that you are in the directory containing the TechWriterTechnicalExercise project, then enter `git checkout -b feature/incorporate-suggested-edits master`.
2. Enter `code .` to open the project files in Visual Studio Code.
3. Incorporate all requested changes, then verify that you saved the updated files.
4. Enter the following commands to include all changed files, create a commit message, and push them to the remote origin.
```console
git add --all
git commit -m "Incorporated requested changes"
git push -u origin feature/incorporate-suggested-edits
```

## Create a pull request
[[Need to document this]]