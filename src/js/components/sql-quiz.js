

const sql = window.SQL;
//const sql = require('sql.js');
//var db;
var db = new sql.Database();

const quizForm = document.getElementById('quiz-form');
const quizData = document.getElementById('quiz-data');
const quizSetup = document.getElementById('quiz-setup');
const quizAnswer = document.getElementById('quiz-answer');
const quizTablenames = document.getElementById('quiz-tablenames');
const sqlValueInput = document.getElementById('sql-input')

db.exec(quizSetup.value);
var correct_answer = quizAnswer.value;
const correct_results = db.exec(correct_answer);
const correct_output = table_from_results(correct_results);



//document.getElementById('sql-link').onclick = submitSql;
//sqlValueInput.onchange = updSqlVal;

var currTblVals, sqlValue, out_msg, next_link, current_table_string;

function clear() {

    //alert(currTblVals);

    for (const table in currTblVals) {
        const dropQuery = "DROP TABLE IF EXISTS " + table;
        db.exec(dropQuery);
    }
    currTblVals="";
    sqlValue= "";
    out_msg='';
    next_link='';
};


// Return an HTML table as a string, given SQL.js results
function table_from_results(res) {
    var table_string = '<table>';
    if (res) {
        table_string += '<tr>';
        for (var index in res[0].columns) {
        table_string += '<th>' + res[0].columns[index] + '</th>';
        }
        table_string += '</tr>';
        for (var row_index in res[0].values) {
        table_string += '<tr>';
        for (var col_index in res[0].values[row_index]) {
            table_string += '<td>' + res[0].values[row_index][col_index] + '</td>';
        }
        table_string += '</tr>';
        }
    }
    table_string += '</table>';
    return table_string;
    };


window.addEventListener('load', e=> {
        lessonSetup()
});

function lessonSetup() {
     
    //alert(quizSetup.value);

    clear();
    //this.clear()

    //var currTblVals = this.state;

    //const current_lesson = Number(lesson);
    //const num_lessons = Object.keys(lessons).length;

    document.getElementById("correct-display").style.display="none";

    current_table_string = '';
    var tblnms = quizTablenames.value;

    currTblVals = tblnms.split(",");
    for (var index in currTblVals) {
      const results = db.exec("SELECT * FROM " + currTblVals[index] + ";");
      current_table_string += '<div class="table-name"><strong>Table Name:</strong> ' + currTblVals[index] + '</div>' + table_from_results(results);
    }
    //this.setState({current_table_string, currTblVals, correct_answer, correct_results, correct_output, current_lesson, num_lessons})
    //alert(current_table_string);
    document.getElementById("quiz-data").innerHTML = current_table_string;
    
};



function show_is_correct (is_correct, custom_error_message) {
  //const {current_lesson, num_lessons } = this.state;
  //var {out_msg, next_link} = this.state;
  
  if (is_correct) {
    out_msg = '<h4>Well done! That\'s the right answer!</h4>';
    document.getElementById("quiz-form").style.display="none";
    //document.getElementById("correct-display").style.display="block";
    //document.getElementById("answer-link").style.display="none";       

    //if (current_lesson < num_lessons) {
    //  next_link = '<a href="/' + lessons[current_lesson+1]['short_name'] + '" tabindex="3" class="link-button">Try the next Lesson</a>';
    //} else {
    //  out_msg += 'You have reached the end of the line.  Go put SQL Master on your CV!';
    //}
  } else if (custom_error_message) {
    out_msg = custom_error_message;
  } else {
    out_msg = '<h4>Hmmm.</h4> It\'s good but it\'s not right.  Have another go.';
  }
  //this.setState({out_msg, next_link});
  document.getElementById("out-msg").innerHTML = out_msg;
};


window.submitSql = function() {
    //alert(sqlValueInput.value);

    sqlValue = sqlValueInput.value;
    //console.log(sqlValue);

    try {
        var results = db.exec(sqlValue);

        if (results.length === 0) {
          show_is_correct(false, '<h4>Hmmm, that didn\'t return any results.</h4>  Try it again.');
        } else {
          var is_correct = grade_results(results, correct_results);
          if (is_correct) {
            show_is_correct(true, null);            
            } 
          else {
            show_is_correct(false, '<h4>Something doesn\'t look right there.</h4>  Try that one again.');
          }
        }

      } catch (err) {
        show_is_correct(false, '<h4>It\'s good but it\'s not right.</h4>  Have another go.');
      }

      return false;


};

function normalize (x) {
  return x.toUpperCase().replace(/\s/g, "")
};

function grade_results (res, corr) {
  if (!res) {
    return false;
  }
  // Check to make sure the results are equal, but normalize case and remove whitespace from column names.
  return JSON.stringify(res[0].columns.map(normalize)) === JSON.stringify(corr[0].columns.map(normalize)) &&
    JSON.stringify(res[0].values) === JSON.stringify(corr[0].values);
};

window.showAnswer = function() {
  //var {next_link} = this.state;

  document.getElementById("quiz-form").style.display="none";

  document.getElementById("correct-display").style.display="block";

  document.getElementById("quiz-output").innerHTML = correct_output;

  document.getElementById("answer-link").style.display="none";

  //return false;
  
  //if (current_lesson < num_lessons) {
  //  next_link = '<a href="/' + lessons[current_lesson+1]['short_name'] + '" tabindex="3" class="link-button">Try the next Lesson</a>';
  //}
};