BEGIN
	CREATE TEMPORARY TABLE	datosPac (
    	tipo varchar(25),
        dato varchar(300),
        valor1 varchar(300),
        valor2 varchar(300)
    );
    
    INSERT INTO datosPac 
    SELECT 'basico','DNI',dni,null from Pacientes P WHERE P.codPaciente= codPaciente;
    INSERT INTO datosPac 
    SELECT 'basico','numTarjSanitaria',numTarjSanitaria,null from Pacientes P WHERE P.codPaciente= codPaciente;
    INSERT INTO datosPac 
    SELECT 'basico','fecNac',fechaNacimiento,null from Pacientes P WHERE P.codPaciente= codPaciente;
    INSERT INTO datosPac 
    SELECT 'basico','sexo',sexo,null from Pacientes P WHERE P.codPaciente= codPaciente;
    INSERT INTO datosPac 
    SELECT 'basico','telf',telefono,null from Pacientes P WHERE P.codPaciente= codPaciente;
    INSERT INTO datosPac 
    SELECT 'basico','region',pais,ccaa from Pacientes P WHERE P.codPaciente= codPaciente;
    
    INSERT INTO datosPac 
    SELECT 'medicamento',nombreMedicamento,fechaInicio,fechaFin from TratamientoPaciente T WHERE T.codPaciente= codPaciente;
    
    INSERT INTO datosPac 
    SELECT 'patologia',DC.descripcion,DP.idDiagnosticosCIE10,dp.fechaDescubierto from DiagnosticosPaciente DP inner join DiagnosticosCIE10 DC on DP.idDiagnosticosCIE10 = DC.clase WHERE DP.codPaciente= codPaciente;
    
     SELECT * FROM datosPac;

    DROP TEMPORARY TABLE IF EXISTS datosPac;
    
END