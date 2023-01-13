import Discord from "discord.js"



export interface CommandOptionStructure{
   name: string,
   description: string,
   type: number | (keyof Discord.ApplicationCommandOptionType)
   required: boolean
   options: SubcommandStructure[]
}
export interface SubcommandStructure{
   name: string,
   description: string,
   required: boolean
   options: SubcommandOptionStructure[]
}
export interface SubcommandOptionStructure{
   name: string,
   description: string,
   type: number | (keyof Discord.ApplicationCommandOptionType)
   required: boolean
}
export interface SlashCommandStructure{
    slash: boolean,
    enable: boolean,
    dbl: boolean,
    name: string[],
    description: string,
    options: CommandOptionStructure[],
	  execute: (client: Discord.Client, interaction: Discord.ChatInputCommandInteraction) => Promise<any>
};
export interface MessageCommandStructure{
  slash: boolean
  enable: boolean
  dbl: boolean,
  name: string[],
  execute(client: Discord.Client, message: Message, args: Message[]) => Promise<any>
};
