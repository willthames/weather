function drawGraph(rows, title, divid) { 

    var height = 500, width = 800;

    // margins start at top and go clockwise
    var m = [0.1 * height, 0.1 * width, 0.15 * height, 0.15 * width];
    var x = d3.time.scale().range([0,width]),
        y = d3.scale.log().range([height,0]),
        xAxis = d3.svg.axis().scale(x),
        yAxis = d3.svg.axis().scale(y).orient("left").ticks(5,d3.format('.0d')),
        format = d3.time.format("%Y-%m-%d");

    x.domain([format.parse(rows[0]["Date"]), 
              format.parse(rows[rows.length - 1]["Date"])]);
    y.domain([0.01, Math.pow(d3.max(rows, function(d) { return +d["Rainfall (mm)"] }), 1.1)]);

    var svg = d3.select("#" + divid).append("svg:svg")
        .attr("width", width + m[1] + m[3])
        .attr("height", height + m[0] + m[2])
      .append("svg:g")
        .attr("transform", "translate(" + m[3] + "," + m[0] +")");

    // line generator
    var line = d3.svg.line()
      .x(function(d) { return x(format.parse(d["Date"])); })
      .y(function(d) { return y(Math.max(0.01,d["Rainfall (mm)"])); })

    // An area generator, for the light fill.
    var area = d3.svg.area()
        .x(function(d) { return x(format.parse(d["Date"])); })
        .y0(height)
        .y1(function(d) { return y(Math.max(0.01, +d["Rainfall (mm)"])); })

    // Add the area below the line
    svg.append("svg:path")
        .attr("class", "area rain")
        .attr("d", area(rows));

    // Add the line path.
    svg.append("svg:path")
        .attr("class", "line rain")
        .attr("clip-path", "url(#clip)")
        .attr("d", line(rows));

    // Add the x-axis.
    svg.append("svg:g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    // Add the y-axis.
    svg.append("svg:g")
        .attr("class", "y axis")
        .call(yAxis);

    // Add some axes labels.
    svg.append("text")
        .attr("class", "x label")
        .attr("text-anchor", "center")
        .attr("x", width/2)
        .attr("y", height)
        .attr("dy", "24pt")
        .text("Date")

    svg.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .attr("x", height)
        .attr("y", 0)
        .attr("transform", "translate(-30," + (height + 200) + " ) rotate(-90)")
        .text("Daily rainfall (mm)");

    svg.append("text")
        .attr("x", (width / 2))             
        .attr("y", 0 - (m.top / 2))
        .attr("text-anchor", "middle")  
        .attr("class", "title")
        .text(title);

}

