COMMENT 'Carga los datos para la landing page del paciente'
DETERMINISTIC
CONTAINS SQL
SQL SECURITY DEFINER
BEGIN
    -- Crea una tabla temporal
    CREATE TEMPORARY TABLE tiposVariable (
        tipo varchar(50),
        unidades varchar(50),
        valorMinimoHab varchar(10),
        valorMaximoHab varchar(10),
        fechaMedida date,
        valorMedida varchar(10)
    );
    
    -- Inserta datos en la tabla temporal
    INSERT INTO tiposVariable
    SELECT nombreTipo, null, valorMinimoHab, valorMaximoHab, null, null FROM TiposConstantVital;

    -- Actualiza tiposVariable con la medida del paciente PAC de ese tipo tomada más recientemente
    UPDATE tiposVariable SET
        fechaMedida = (
            SELECT fechaRegistro FROM RegistroConstanteVital RC
            WHERE RC.idPaciente = codPaciente AND RC.nombreTipo = tiposVariable.tipo
            ORDER BY fechaMedida DESC LIMIT 1
        ),
        valorMedida = (
            SELECT valorRegistrado1 FROM RegistroConstanteVital RC
            WHERE RC.idPaciente = codPaciente AND RC.nombreTipo = tiposVariable.tipo
            ORDER BY fechaMedida DESC LIMIT 1
        );

    -- Selecciona y muestra los datos de la tabla temporal
    SELECT * FROM tiposVariable;

    -- Elimina la tabla temporal al final del procedimiento
    DROP TEMPORARY TABLE IF EXISTS tiposVariable;
END;