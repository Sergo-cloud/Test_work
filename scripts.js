
function change_lang(lang){


editor.session.setMode("ace/mode/"+lang);

if (lang == "python") location.href="https://www.brython.info/tests/";

};

function post_code(lang, code){
let json_post = {
	lang: document.getElementById("select_lang").value,
	code: editor.getValue()
	};

setTimeout(read_data(server_get(json_post)), 2000);

}

function server_get(json_input)
{

o = eval(json_input.code)//json_input.code;


let json_output = {
	status: "success",
	output: o
	};

return json_output;
};

function read_data(json_data){
if (json_data.status == "success"){
	document.getElementById("div_output").innerText = json_data.output;
	}else{
	document.getElementById("div_output").innerText = json_data.error;
	}
};