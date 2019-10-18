# ng-mschart
An Angular version of mschart (Javascript Chart Library). It has the component to use mschart in an angular project.

# Installation

1. Install using npm:
npm install mschart ng-mschart --save

2. Open angular.json and under scripts add:
"scripts": [
  "node_modules/mschart/dist/mscharts.min.js"
]

# Usage
In any component you can use the chart using:

<ng-mschart #chart [series]="series"
    [xaxis]="xaxis"
    [chart]="chartD"
    [title]="title" 
    [autoUpdateSeries]="false">
</ng-mschart>

You need to provide at least the series and chart attribute to make sure the chart can get created.

## License
mschart is released under MIT license. You are free to use, modify and distribute this software.

## Contacts
Email: <a href="softmks@gmail.com">softmks@gmail.com</a>