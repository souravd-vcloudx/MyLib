<script language="javascript">
<!--

// Prepare UI on Room Connection
function enxHookRoomConnected() {
	if (room.me.role() == "moderator") {
			// Add Delete All Link
			$(".enx_group_chat").prepend('<a id="btnDeleteAllMessages">Delete All message</a>'); 
	}
}

// Receive Custom Signal and process Message Deletion
function enxHookCustomSignalReceived() {

		if (enxEvents.customSignalReceived.message.msg.type == "DelAllMsg")
		{	$(".message-row").remove(); 
		}
}

// On Click, Broadcast a Signal to delete all message
$( "#btnDeleteAllMessages" ).click(function() {
	// To Internal Signal

	var MessageOpt = [
		"type": "DelAllMsg"
	};
	
	room.sendUserData(MessageOpt, true, [], function(data){
		// Signal sent
		$(".message-row").remove(); 
	});

});
//-->
</script>
