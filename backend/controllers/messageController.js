const { getAIResponse } = require("../services/openaiService");

const handleMessage = async (req, res) => {
  try {
    const { content } = req.body;

    const response = await getAIResponse(content);

    res.json({
      role: "assistant",
      content: response,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Error generating AI response",
    });
  }
};

module.exports = {
  handleMessage,
};