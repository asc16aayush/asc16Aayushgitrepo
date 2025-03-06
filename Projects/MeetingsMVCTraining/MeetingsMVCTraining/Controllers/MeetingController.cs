using System.Text;
using MeetingsMVCTraining.Models;
using Microsoft.AspNetCore.Mvc;
using RestSharp;
using Newtonsoft.Json;


namespace MeetingsMVCTraining.Controllers
{
    

        public class MeetingController : Controller
        {
        private readonly HttpClient _httpClient;
        private static List<Meeting> _meetingsList = new(); // Store meetings in memory

        public MeetingController(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        // GET: Meeting/Create
        [HttpGet]
        public IActionResult Create()
        {
            return View(_meetingsList); // Pass the meetings list to the view
        }

        // POST: Meeting/Create
        [HttpPost]
        public async Task<IActionResult> Create(Meeting meeting)
        {
            if (ModelState.IsValid)
            {
                // Store meeting locally
                _meetingsList.Add(meeting);

                // Set the base address to your API
                _httpClient.BaseAddress = new Uri("http://localhost:5260/api/Add");

                // Prepare JSON content
                var jsonContent = JsonConvert.SerializeObject(meeting);
                var content = new StringContent(jsonContent, Encoding.UTF8, "application/json");

                // Send POST request
                var response = await _httpClient.PostAsync("", content);

                if (!response.IsSuccessStatusCode)
                {
                    ModelState.AddModelError("", "There was an issue adding the meeting.");
                }
            }

            return View(_meetingsList); // Return the updated list of meetings
        }
    }
    }
