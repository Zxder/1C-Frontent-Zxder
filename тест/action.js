var ans = new Array;
var done = new Array;
var score = 0;
ans[1] = "a";
ans[2] = "c";
ans[3] = "a";
ans[4] = "a";
function Engine(question, answer) {
	if (answer !=ans[question])

		if (!done[question])
	    {
	    	done[question] = -1;
	    }
	    else
	    {
	    	alert("Нельзя два раза");
	    }
	}
	else
    {
    	if (!done[question])
    	{
    		done[question] = -1;
    		score++;
    	}
    	else
    	{
    		alert("Нельзя два раза");
	    }
	}
}
function Result ()
{
	alert("Ваш счет:"+score)
}