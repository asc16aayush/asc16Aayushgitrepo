using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace workshopsAPI.Migrations
{
    /// <inheritdoc />
    public partial class Addedsessionmodelwithupdtedseeddata : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Sessions",
                columns: new[] { "Id", "Name", "Speaker", "WorkshopId" },
                values: new object[,]
                {
                    { 1, "Introduction to Angular JS", "John Doe", 1 },
                    { 2, "Scopes in Angular JS", "John Doe", 1 },
                    { 3, "Introduction to React JS", "Paul Smith", 2 },
                    { 4, "JSX", "Paul Smith", 2 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Sessions",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Sessions",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Sessions",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Sessions",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}
