using Backend.Data;
using Backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class RibaController : ControllerBase
    {
        // koristimo dependency injection
        // 1. definiramo privatno svojstvo
        private readonly EdunovaContext _context;


        // 2. u konstruktoru postavljamo vrijednost
        public RibaController(EdunovaContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(_context.Ribe);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }


        [HttpGet("{sifra:int}")]
        public IActionResult Get(int sifra)
        {
            if (sifra <= 0)
            {
                return StatusCode(StatusCodes.Status404NotFound, new {poruka= "Šifra mora biti pozitivan broj" });
            }
            try
            {
                var smjer = _context.Ribe.Find(sifra);
                if (smjer == null)
                {
                    return NotFound(new { poruka = $"Smjer s šifrom {sifra} ne postoji" });
                }
                return Ok(smjer);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }



        [HttpPost]
        public IActionResult Post(Riba smjer)
        {
            try
            {
                _context.Ribe.Add(smjer);
                _context.SaveChanges();
                return StatusCode(StatusCodes.Status201Created, smjer);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }


        [HttpPut("{sifra:int}")]
        public IActionResult Put(int sifra, Riba smjer)
        {
            try
            {

                var smjerBaza = _context.Ribe.Find(sifra);
                if (smjerBaza == null)
                {
                    return NotFound(new { poruka = $"Riba s šifrom {sifra} ne postoji" });
                }

                // rucni mapping - kasnije automatika
                smjerBaza.Naziv = smjer.Naziv;

                _context.Ribe.Update(smjerBaza);
                _context.SaveChanges();
                return Ok(smjerBaza);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }


        [HttpDelete("{sifra:int}")]
        public IActionResult Delete(int sifra)
        {
            if (sifra <= 0)
            {
                return StatusCode(StatusCodes.Status404NotFound, new { poruka = "Šifra mora biti pozitivan broj" });
            }
            try
            {
                var smjer = _context.Ribe.Find(sifra);
                if (smjer == null)
                {
                    return NotFound(new { poruka = $"Smjer s šifrom {sifra} ne postoji" });
                }
                _context.Ribe.Remove(smjer);
                _context.SaveChanges();
                return NoContent();
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }


    }
}
