
exports.create = async (interaction) => {

  await interaction.reply('Creating Column...')

  const channel = interaction.channel

  const kanban = channel.parent

  try {
    const customChannel = await kanban.createChannel(interaction.options.getString('name', true), {
      type: 'GUILD_TEXT'
    })
  } catch (error) {
    await interaction.editReply('You must provide a name')
    return
  }

  customChannel.setParent(kanban)
  customChannel.setTopic(JSON.stringify({
    type: 'custom',
    board: kanban.name,
  }))

  await interaction.editReply(`Created ${interaction.options.getString('name')}`)

}

