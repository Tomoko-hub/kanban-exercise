# Memo myself

# Create kanban board: start

-Start project 21.5.2024:
    -install react-beautiful-dnd("^13.1.1")
    -create own git repository in github(https://github.com/Tomoko-hub/iconic-chain-kanban-exercise)
    -create branch:tomoko.main, and fork repository

-Day2 22.5: 
    -install chakra-ui: I choose chakra-ui because I like their designs and colors. And I think chakra suits this kanban project.

    -decide draft design: create three or four horizontal raws, each with
      -To do:section (background color or side color : gray or whitegray(Gray 100:#EDF2F7 or Gray 200:#E2E8F0))
      -In progress:section (background color or side color : cyan: Blue 200(#90CDF4))
      -Need to review:section (background color or side color : pink/Pink 200(#FBB6CE)) but is this 'must have'? this is 'good to have' part
      -Complete:section (backgroun color or side color : teal/Teal 100(#B2F5EA))
    -use colors of importance:(0:green/Green 500:#38A169, 1:yellow/Yellow 300:#F6E05E, 2:red/Red 500:#E53E3E)
    chakra default color(https://v2.chakra-ui.com/docs/styled-system/theme#colors)

    Question: 'Not mandatory, but bonus: After listing tasks in the column, there should be link/button which will open modal for creating a new task for the column.' -> This part I have to think more. 
    I think it would be easier for users to have a separate button for modal and 'add item'-button. (-> Or same functionality as Jira?? How about create both??)

-Day3 23.5:
  -change Dockerfile, package.json and yaml file to enable to use hot reloading

-Day4 24.5:
  -memo to self:after changing jsonfile(remove/add/update) dependencies, after updating Dockerfile -> docker-compose build