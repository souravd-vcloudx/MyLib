
// Prepare UI on Room Connection
function enxHookRoomConnected() {
	if (room.me.role == "moderator") {	// Add Delete All Link
			var button = document.createElement("button");
			button.id="btnDeleteAllMessages";
			button.innerText="Delete Messages";			

			document.querySelector(".enx_group_chat").prepend(button); 

			document.querySelector("#btnDeleteAllMessages").addEventListener("click", () => {
				var MessageOpt = {
					"type": "DelAllMsg"
				};
				
				room.sendUserData(MessageOpt, true, [], function(data){
					// Signal sent
					// comment this code if you do not want to delete your own messages
					if(document.querySelector(".message-row")){
						document.querySelectorAll(".message-row").forEach((item, index)=>{item.remove()}); 
					}
				});
			});
	}
}

// Receive Custom Signal and process Message Deletion
function enxHookCustomSignalReceived() {

		if (enxEvents.customSignalReceived.message.message.type == "DelAllMsg")
		{
			// this will delete all the messages of other participants
			if(document.querySelector(".message-row")){
				document.querySelectorAll(".message-row").forEach((item, index)=>{item.remove()}); 
			}
		}
}



